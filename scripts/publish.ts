import path from "path";
import fs, { PathLike } from "fs";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown-to-html";
import { Post } from "@/types";
import Cloudflare from "cloudflare";
import { ACCOUNT_ID, API_KEY, NAMESPACE_ID } from "const";

const createSlug = (title: string) => {
  let slug = "";
  const words = title.split(" ");
  for (let index = 0; index < words.length; index++) {
    slug += words[index].toLowerCase().replace(/[^0-9a-z]/g, "");
    if (index !== words.length - 1) {
      slug += "-";
    }
  }
  return slug;
};

const getPostDataFromFile = async (filePath: PathLike): Promise<Post> => {
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);
  if (!content || !data) {
    throw new Error("File missing required content");
  }

  // perform the content transformation here, to improve request time
  const htmlContent = await markdownToHtml(content);

  const {
    title,
    description,
    projectShortName,
    coverImageUrl,
    date,
    author,
    tags,
  } = data;
  if (!title || !description || !coverImageUrl || !date || !author || !tags) {
    throw new Error("A required field is missing");
  }

  const slug = createSlug(title as string);

  console.log(`data retrieved for ${title}`);
  return {
    title,
    description,
    projectShortName,
    content: htmlContent,
    coverImageUrl,
    date,
    author,
    tags,
    slug,
  };
};

const getFilenamesFromFolder = (folder: string): string[] => {
  const fullPath = path.join(process.cwd(), folder);
  const files = fs.readdirSync(fullPath, "utf8");
  return files;
};

const writeToFile = (data: object, fileName: string) => {
  const jsonData = JSON.stringify(data, null, 2);
  const dir = path.dirname(fileName);
  // Ensure that the directory exists
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(fileName, jsonData, "utf8");
};

export type Tags = Record<string, number>;

const writeTagsToFile = (tags: string[], fileName: string) => {
  const tagsObj: Tags = {};
  tags.forEach((tag) => {
    if (tagsObj[tag]) {
      tagsObj[tag]++;
    } else {
      tagsObj[tag] = 1;
    }
  });

  writeToFile(tagsObj, fileName);
};

const buildJson = async (postFolder: string) => {
  const postFileNames = getFilenamesFromFolder(postFolder);
  let postData: Post[] = [];
  const postPromises = [];
  for (const fileName of postFileNames) {
    console.log(`Getting data from ${fileName}`);
    postPromises.push(
      getPostDataFromFile(path.join(process.cwd(), postFolder, fileName)),
    );
  }

  postData = await Promise.all(postPromises);
  console.log("all data retrieved");

  const postTags: string[] = [];
  for (const post of postData) {
    post.tags.forEach((tag) => postTags.push(tag));
  }

  writeTagsToFile(postTags, "app/data/posts/tags.json");
  writeToFile(postData, "app/data/posts/posts.json");

  return postData;
};

async function main() {
  const cf = new Cloudflare({
    apiToken: API_KEY,
  });

  const postData = await buildJson("posts");
  const params: Cloudflare.KV.Namespaces.BulkUpdateParams = {
    account_id: ACCOUNT_ID,
    body: [
      {
        base64: false,
        key: "postData",
        value: JSON.stringify(postData),
      },
    ],
  };
  const result = await cf.kv.namespaces.bulk.update(NAMESPACE_ID, params);
  console.log(result);
}

await main();

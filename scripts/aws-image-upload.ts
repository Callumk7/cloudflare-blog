import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname, relative } from "path";

import { config } from "dotenv";

// dotenv get env.
config();

const IMAGE_PATH = join(process.cwd(), "files", "images");
console.log(IMAGE_PATH);
const REGION = "eu-west-2";
const BUCKET_NAME = "ck-portfolio-images";
const ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY!;
const SECRET_ACCESS_KEY = process.env.AWS_SECRET_KEY!;

// Setup the S3 Client
const s3 = new S3Client({
	credentials: {
		accessKeyId: ACCESS_KEY_ID,
		secretAccessKey: SECRET_ACCESS_KEY,
	},
	region: REGION,
});

// Function to recursively get all image file paths
const getImageFilePaths = (
	dir: string,
	fileTypes: string[] = [".jpg", ".jpeg", ".png"],
	fileList: string[] = [],
): string[] => {
	const files = readdirSync(dir);

	for (const file of files) {
		const absolutePath = join(dir, file);
		if (statSync(absolutePath).isDirectory()) {
			getImageFilePaths(absolutePath, fileTypes, fileList);
		} else if (fileTypes.includes(extname(file).toLowerCase())) {
			fileList.push(absolutePath);
		}
	}

	return fileList;
};

// Run the recursive function
const filePaths = getImageFilePaths(IMAGE_PATH);
console.log(filePaths); // sanity check

const getContentType = (filePath: string) => {
	const ext = extname(filePath).toLowerCase();
	switch (ext) {
		case ".jpg":
			return "image/jpeg";
		case ".jpeg":
			return "image/jpeg";
		case ".png":
			return "image/png";
		default:
			console.log("Content type is not a jpg or png, using octet-stream");
			return "application/octet-stream";
	}
};

const uploadImage = async (filePath: string) => {
	const fileContent = readFileSync(filePath);

	const relativePath = relative(IMAGE_PATH, filePath);
	const s3Key = join("images", relativePath);
	console.log(s3Key);
	const contentType = getContentType(filePath);
	console.log(contentType);

	const uploadParams = {
		Bucket: BUCKET_NAME,
		Key: s3Key.toLowerCase(),
		Body: fileContent,
		ContentType: contentType,
	};

	try {
		const data = await s3.send(new PutObjectCommand(uploadParams));
		console.log(`Successfully uploaded ${filePath} as ${s3Key} to S3`, data);
	} catch (error) {
		console.error(`Error uploading ${filePath} to S3:`, error);
	}
};

for (const file of filePaths) {
	uploadImage(file);
}

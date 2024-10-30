import { env } from "@/env";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative, sep } from "node:path";
import { Image } from "./sharp";

const IMAGE_PATH = join(process.cwd(), "files", "images");
const REGION = "eu-west-2";
const BUCKET_NAME = "ck-portfolio-images";

// Setup the S3 Client
const s3 = new S3Client({
	credentials: {
		accessKeyId: env.AWS_ACCESS_KEY,
		secretAccessKey: env.AWS_SECRET_KEY,
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

	// Split the path to check if 'resized' is a top-level directory
	const pathParts = dir.split(sep);
	if (pathParts[pathParts.length - 1] === "resized") {
		return fileList;
	}

	for (const file of files) {
		const absolutePath = join(dir, file);
		if (statSync(absolutePath).isDirectory()) {
			// Skip the 'resized' directory
			if (file !== "resized") {
				getImageFilePaths(absolutePath, fileTypes, fileList);
			}
		} else if (fileTypes.includes(extname(file).toLowerCase())) {
			fileList.push(absolutePath);
		}
	}

	return fileList;
};

const filePaths = getImageFilePaths(IMAGE_PATH);

console.log(filePaths); // sanity check

for (const file of filePaths) {
	const image = new Image(file);
	await image.generateImages();
	console.log(image.all);
	for (const img of image.all) {
		await uploadImage(img);
	}
}

async function uploadImage(filePath: string) {
	const fileContent = readFileSync(filePath);

	const relativePath = relative(IMAGE_PATH, filePath);
	const s3Key = join("images", relativePath);
	console.log(s3Key);
	const contentType = Image.getContentType(filePath);

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
}

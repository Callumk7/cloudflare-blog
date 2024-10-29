import sharp from "sharp";
import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { extname, dirname, join } from "node:path";

//### Recommended Image Size Breakpoints
//
//1. **Thumbnail/Preview Sizes**
//   - 150x150px (square thumbnails)
//   - 300x300px (larger previews)
//
//2. **Content Images**
//   - 640px width (mobile-first baseline)
//   - 768px width (tablet/smaller screens)
//   - 1024px width (laptop/desktop)
//   - 1920px width (large displays/retina)
//
//3. **Hero/Banner Images**
//   - 1200x630px (social sharing/OpenGraph)
//   - 1920x1080px (full-width heroes)

export class Image {
	filePath: string;
	dir: string;
	outDir: string;
	imageBuffer: Buffer;
	contentType: string;
	all: string[];

	constructor(filePath: string) {
		this.filePath = filePath;
		this.dir = dirname(filePath);
		this.outDir = `${this.dir}/resized`;
		this.ensureOutdir();

		try {
			this.imageBuffer = readFileSync(filePath);
		} catch (error) {
			console.error(error);
			throw new Error("Unable to read file from path");
		}

		this.contentType = Image.getContentType(filePath);
		this.all = [filePath];
	}

	async generateImages() {
		await Promise.all([this.createThumbnail(), this.createContentImages()]);
	}

	private async createThumbnail() {
		await sharp(this.imageBuffer)
			.resize(150, 150)
			.png()
			.toFile(`${this.outDir}/thumb.png`);
		this.all.push(`${this.outDir}/thumb.png`);
	}

	private async createContentImages() {
		await Promise.all([
			sharp(this.imageBuffer).resize(640).png().toFile(`${this.outDir}/640.png`),
			sharp(this.imageBuffer).resize(1024).png().toFile(`${this.outDir}/1024.png`),
			sharp(this.imageBuffer).resize(1920).png().toFile(`${this.outDir}/1920.png`),
		]);
		this.all.push(`${this.outDir}/640.png`);
		this.all.push(`${this.outDir}/1024.png`);
		this.all.push(`${this.outDir}/1920.png`);
	}

	private ensureOutdir() {
		try {
			// Check if directory exists
			if (!existsSync(this.outDir)) {
				// Create directory if it doesn't exist
				mkdirSync(this.outDir);
				console.log(`Created directory: ${this.outDir}`);
			} else {
				console.log(`Directory already exists: ${this.outDir}`);
			}
		} catch (error) {
			console.error("Error creating directory");
			throw error;
		}
	}

	static getContentType = (filePath: string) => {
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
}

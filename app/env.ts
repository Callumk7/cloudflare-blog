import "dotenv/config";

if (!process.env.AWS_ACCESS_KEY || !process.env.AWS_SECRET_KEY) {
	throw new Error("WARNING: no AWS access key or AWS secret key set")
}

export const env = {
	AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
	AWS_SECRET_KEY: process.env.AWS_SECRET_KEY
}

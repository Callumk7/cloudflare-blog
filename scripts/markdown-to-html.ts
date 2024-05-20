import { unified } from "unified";
// import prism from "remark-prism";
import parse from "remark-parse";
import rehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import stringify from "rehype-stringify";
import rehypeShiki from "@shikijs/rehype";

// switched to shiki from prism
export async function markdownToHtml(markdown: string) {
	const result = await unified()
		.use(parse)
		.use(remarkGfm)
		.use(rehype)
		.use(rehypeShiki, {
			theme: "houston",
		})
		.use(stringify)
		.process(markdown);
	return result.toString();
}

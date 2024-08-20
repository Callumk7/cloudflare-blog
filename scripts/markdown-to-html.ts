import { unified } from "unified";
import parse from "remark-parse";
import remarkCallout from "@r4ai/remark-callout";
import rehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import stringify from "rehype-stringify";
import rehypeShiki from "@shikijs/rehype";

// switched to shiki from prism
export async function markdownToHtml(markdown: string) {
	const result = await unified()
		.use(parse)
		.use(remarkGfm)
		.use(remarkCallout)
		.use(rehype)
		.use(rehypeShiki, {
			theme: "houston",
		})
		.use(stringify)
		.process(markdown);
	return result.toString();
}

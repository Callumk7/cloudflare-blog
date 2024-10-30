import remarkCallout from "@r4ai/remark-callout";
import rehypeShiki from "@shikijs/rehype";
import stringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import parse from "remark-parse";
import rehype from "remark-rehype";
import { unified } from "unified";

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

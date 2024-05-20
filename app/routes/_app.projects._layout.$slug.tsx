import { Container } from "@/components/layout/container";
import { PostBody } from "@/components/posts/post-body";
import { LoaderFunctionArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getProjectBySlug } from "@/api/projects";

///
/// LOADER
///
export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const project = await getProjectBySlug(context, slug!);

  if (!project) {
    return redirect("/projects");
  }

  // const images = getProjectImageSrcs(project.shortName);
  // WARN: currently need to implement images with cloudflare / S3
  // as obviously, the node, serverful solution won't work here
  return json({ project });
};

export default function ProjectsPage() {
  const { project } = useLoaderData<typeof loader>();

  return (
    <Container width={"max"}>
      <h1 className="font-syne text-2xl font-black text-primary-1 md:text-4xl">
        {project.name}
      </h1>
      <PostBody content={project.content} />
    </Container>
  );
}

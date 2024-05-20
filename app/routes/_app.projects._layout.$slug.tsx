import { Container } from "@/components/layout/container";
import { PostBody } from "@/components/posts/post-body";
import { getProjectBySlug } from "@/features/projects/get-projects";
import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// import "@/styles/prism.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProjectImageSrcs } from "@/lib/images/get-project-images";

///
/// LOADER
///
export const loader = ({ params }: LoaderFunctionArgs) => {
  const slug = params.slug;
  const project = getProjectBySlug(slug!);

  if (!project) {
    return redirect("/projects");
  }

  const images = getProjectImageSrcs(project.shortName);
  return json({ project, images });
};

export default function ProjectsPage() {
  const { project, images } = useLoaderData<typeof loader>();

  return (
    <Container width={"max"}>
      <h1 className="font-syne text-2xl font-black text-primary-1 md:text-4xl">
        {project.name}
      </h1>
      {images && images.length > 0 && (
        <Carousel className="mx-auto my-10 w-full md:w-4/5">
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image}>
                <figure>
                  <div className="overflow-hidden rounded-lg border">
                    <img
                      src={image}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <figcaption className="mt-3 text-center font-mono">{image}</figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      )}
      <PostBody content={project.content} />
    </Container>
  );
}

import { getAllProjectData } from "@/api/projects";
import { SkillsList } from "@/components/cv/skills-list";
import { WorkExperience } from "@/components/cv/work-experience";
import { Card } from "@/components/layout/card";
import { Container } from "@/components/layout/container";
import { H2 } from "@/components/layout/headers";
import { Separator } from "@/components/layout/separator";
import { Title } from "@/components/layout/title";
import { SocialLinks } from "@/components/navigation/social-links";
import { Project } from "@/types";
import { LoaderFunctionArgs, json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const allProjects = await getAllProjectData(context);
  const projects = allProjects.filter((project) => !project.wip);

  return json({ projects });
};

const skills = [
  "HTML",
  "CSS",
  "javascript",
  "typescript",
  "react",
  "remix",
  "tailwind",
  "SQl (Postgres)",
  "nodejs",
  "nextjs",
  "product management",
  "ux research and design",
  "data analysis",
];

export default function CVRoute() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <Container width={"mobMax"}>
      <Card flex>
        <Title title="Callum Kloos" />
        <H2>Web Developer and Product Designer</H2>
        <p className="pb-7">
          Self motivated and ambitious web developer who has built complex web
          applications from the ground up with HTML, CSS, Typescript and React.
          Ex. Product manager with four years of experience, I am seeking new
          opportunities in a technical web development role.
        </p>
        <div className="flex justify-between">
          <SocialLinks />
          <p>
            <span className="mr-5">Prefer a PDF copy?</span>{" "}
            <DownloadCVButton />
          </p>
        </div>
      </Card>
      <Card>
        <H2>Skills</H2>
        <SkillsList skills={skills} />
      </Card>
      <div className="grid gap-9 lg:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-4">
          <H2>Work History</H2>
          <WorkExperience
            institution="Freelance Web Developer"
            title="Web Developer"
            dateFrom={new Date("2019-07-01")}
            dateTo={new Date("2020-09-01")}
          >
            <div>
              Dedicated full-time hours to immerse myself in the craft of web
              development. Built{" "}
              <Link
                className="link"
                to={"/projects/playq-videogame-playlist-manager"}
              >
                playQ
              </Link>{" "}
              to touch all aspects of the web development pipeline. Built{" "}
              <Link
                className="link"
                to={"/projects/this-little-piggy-richmond"}
              >
                This Little Piggy
              </Link>{" "}
              for a local animal rescue charity. Built a personal portfolio.
              During this time I have become proficient with React, Remix,
              Serverless and serverful deployment environments, api design and
              database design.
            </div>
          </WorkExperience>
          <WorkExperience
            institution="Cambrian Games"
            title="UX Strategy Consultant"
            dateFrom={new Date("2019-07-01")}
            dateTo={new Date("2020-09-01")}
          >
            Worked freelance as a Product Designer on an angel funded game
            development platform. I helped to shape the initial product
            strategy, and lay the initial design foundations for user testing
            and future development.
          </WorkExperience>
          <WorkExperience
            institution="Receipt Bank"
            title="Product Manager"
            dateFrom={new Date("2019-07-01")}
            dateTo={new Date("2020-09-01")}
          >
            Product Manager at a fast paced, high growth company using
            artificial intelligence to disrupt the accounting space. Joined
            after series B funding through to a successful series C and later
            acquisition. I used agile methodologies, collaborated with a
            multi-disciplinary team, and managed the inception, research,
            testing, and iteration of features and initiatives which lead to the
            release of the companies first automated submission method,
            automated documentation fetching and bank integration, and the
            initiation of product led engagement and retention strategies.
          </WorkExperience>
        </div>
        <div className="col-span-2 w-full space-y-3 lg:col-span-1">
          <H2>Projects</H2>
          {projects.map((project) => (
            <CVProjectCard project={project} key={project.slug} />
          ))}
          <Separator />
          <H2>Education</H2>
          <WorkExperience
            institution="University of Strathclyde"
            title="MEng Mechanical Engineering (Merit)"
            dateFrom={new Date("2009-09-01")}
            dateTo={new Date("2015-09-01")}
          ></WorkExperience>
          <WorkExperience
            institution="CareerFoundry"
            title="UX Immersion"
            dateFrom={new Date("2020-10-01")}
            dateTo={new Date("2021-09-01")}
          ></WorkExperience>
        </div>
      </div>
    </Container>
  );
}

function DownloadCVButton() {
  return (
    <a
      href="/files/callum-kloos-cv-2024.pdf"
      target="_blank"
      rel="noreferrer"
      className="text-bold mr-6 rounded-md bg-foreground p-2 text-background transition-colors duration-100 ease-in-out hover:bg-primary-1 active:bg-primary-2"
    >
      Download
    </a>
  );
}

function CVProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full">
      <Link
        to={`/projects/${project.slug}`}
        className="transition-colors ease-in-out hover:text-purple-400"
      >
        <H2>{project.name}</H2>
      </Link>
      <p className="prose prose-invert">{project.cvDescription}</p>
    </Card>
  );
}

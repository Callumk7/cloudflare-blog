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
	"SQl",
	"nodejs",
	"nextjs",
	"product management",
	"ux research and design",
	"git",
];

export default function CVRoute() {
	const { projects } = useLoaderData<typeof loader>();

	return (
		<Container width={"mobMax"}>
			<Card flex>
				<Title title="Callum Kloos" />
				<H2>Web Developer</H2>
				<p className="pb-7">
					Self motivated and ambitious web developer who has built complex web
					applications from the ground up with HTML, CSS, Typescript and React. Previously
					a product manager and UX researcher with four years of experience, I am seeking
					new opportunities in a web development role.
				</p>
				<div className="flex justify-between">
					<SocialLinks />
					<p>
						<span className="mr-5">Prefer a PDF copy?</span> <DownloadCVButton />
					</p>
				</div>
			</Card>
			<div className="grid gap-9 lg:grid-cols-3">
				<div className="flex flex-col col-span-2 gap-4">
					<H2>Work History</H2>
					<WorkExperience
						institution="Freelance Web Developer"
						title="Web Developer"
						dateFrom={new Date("2019-07-01")}
						dateTo={new Date("2020-09-01")}
					>
						<div className="prose prose-invert">
							Dedicated extensive hours into developing a strong proficiency in
							JavaScript, TypeScript, HTML, CSS, and React. Developed multiple projects
							including:
							<ul>
								<li>
									<Link to={"/projects/my-development-portfolio"}>callumkloos.dev</Link>{" "}
									(personal portfolio)
								</li>
								<li>
									<Link to={"/projects/playq"}>playq.xyz</Link> and{" "}
									<Link to={"/projects/game-master-tabletop-rpg-note-taking"}>
										game-master
									</Link>{" "}
									(full-stack react projects)
								</li>
								<li>
									<Link to={"/projects/this-little-piggy-richmond"}>
										thislittlepiggyrichmond.co.uk
									</Link>{" "}
									(website in production for local animal rescue)
								</li>
							</ul>
							Experienced in modern frameworks like Remix to utilise modern server-driven
							rendering patterns (SSR, SSG), as well as experience designing SQL schemas
							and backend systems to handle highly dynamic data.
						</div>
					</WorkExperience>
					<WorkExperience
						institution="Cambrian Games"
						title="UX Strategy Consultant"
						dateFrom={new Date("2019-07-01")}
						dateTo={new Date("2020-09-01")}
					>
						Collaborated closely with the founders to plan and implement a strong user
						research strategy for an innovative and disruptive product category. Gathered
						and presented key data around target demographics, market landscape and
						opportunities through key UX research skills and techniques including user
						interviews, user story mapping, heuristic evaluation of existing products, and
						development of key user personas.
					</WorkExperience>
					<WorkExperience
						institution="Receipt Bank"
						title="Product Manager"
						dateFrom={new Date("2019-07-01")}
						dateTo={new Date("2020-09-01")}
					>
						Receipt Bank (now Dext) is a fast paced, high growth company using artificial
						intelligence to disrupt the accounting space. Joined after series B funding
						and worked through to a successful Series C investment run. Using agile
						methodologies I collaborated with a multi-disciplinary team through inception,
						research, testing, and iteration to introduce the company's first automated
						submission method.
					</WorkExperience>
					<H2>Projects</H2>
					{projects.map((project) => (
						<CVProjectCard project={project} key={project.slug} />
					))}
				</div>
				<div className="col-span-2 space-y-3 w-full lg:col-span-1">
					<Card>
						<H2>Professional Skills</H2>
						<SkillsList skills={skills} />
					</Card>
					<Separator />
					<H2>Education</H2>
					<WorkExperience
						institution="University of Strathclyde"
						title="MEng Mechanical Engineering (Merit)"
						dateFrom={new Date("2009-09-01")}
						dateTo={new Date("2015-09-01")}
					/>
					<WorkExperience
						institution="CareerFoundry"
						title="UX Immersion"
						dateFrom={new Date("2020-10-01")}
						dateTo={new Date("2021-09-01")}
					/>
				</div>
			</div>
		</Container>
	);
}

function DownloadCVButton() {
	return (
		<a
			href="https://ck-portfolio-images.s3.eu-west-2.amazonaws.com/files/callum-kloos-cv-2024.pdf"
			target="_blank"
			rel="noreferrer"
			className="p-2 mr-6 rounded-md transition-colors duration-100 ease-in-out text-bold bg-primary-3 text-background hover:bg-primary-1 active:bg-primary-2"
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

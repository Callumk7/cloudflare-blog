import ProjectsIndex from "@/routes/_app.projects._index";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRemixStub } from "@remix-run/testing";
import { Project } from "@/types";

const mockProjects: Project[] = [
  {
    name: "Portfolio Website",
    shortName: "portfolio",
    description: "Personal portfolio website built with React and Remix",
    projectUrl: "https://example.com",
    githubUrl: "https://github.com/username/portfolio",
    coverImageUrl: "/images/portfolio-cover.jpg",
    tags: ["Personal", "Frontend"],
    slug: "portfolio-website",
    content: "Full case study content here...",
    tech: ["React", "TypeScript", "Remix", "Tailwind CSS"],
    wip: false,
    cvDescription: "Developed a personal portfolio website using modern web technologies",
    screenshotCount: 3,
  },
  {
    name: "Task Management App",
    shortName: "taskapp",
    description: "A collaborative task management application with real-time updates",
    projectUrl: "https://taskapp.example.com",
    githubUrl: "https://github.com/username/task-app",
    coverImageUrl: "/images/taskapp-cover.jpg",
    tags: ["Productivity", "Full Stack"],
    caseStudyUrl: "/projects/task-management-app",
    slug: "task-management-app",
    content: "Detailed project breakdown and technical decisions...",
    tech: ["Next.js", "Prisma", "PostgreSQL", "WebSockets"],
    wip: false,
    screenshotCount: 5,
  },
  {
    name: "Weather Dashboard",
    shortName: "weather",
    description: "Real-time weather monitoring dashboard with historical data",
    githubUrl: "https://github.com/username/weather-dashboard",
    coverImageUrl: "/images/weather-cover.jpg",
    tags: ["Data Visualization", "API Integration"],
    slug: "weather-dashboard",
    content: "Technical implementation details and challenges...",
    tech: ["React", "D3.js", "OpenWeather API", "Chart.js"],
    wip: false,
    cvDescription: "Built a weather dashboard consuming external APIs",
    screenshotCount: 2,
  },
];

function setupRoute(projects = mockProjects) {
  const RemixStub = createRemixStub([
    {
      path: "/projects",
      Component: ProjectsIndex,
      loader: () => ({ projects }),
    },
  ]);

  return {
    user: userEvent.setup(),
    ...render(<RemixStub initialEntries={["/projects"]} />),
  };
}

describe("Projects route", async () => {
  test("It displays all projects by default", async () => {
    setupRoute();

    await waitFor(() => screen.findByText("Portfolio Website"));

    expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
    expect(screen.getByText("Task Management App")).toBeInTheDocument();
    expect(screen.getByText("Weather Dashboard")).toBeInTheDocument();
  });

  test("It filters projects based on search input", async () => {
    const { user } = setupRoute();
    await waitFor(() => screen.findByText("Portfolio Website"));

    const searchInput = screen.getByLabelText("Search");
    await user.type(searchInput, "weather");

    expect(screen.getByText("Weather Dashboard")).toBeInTheDocument();
    expect(screen.queryByText("Task Management App")).not.toBeInTheDocument();
    expect(screen.queryByText("Portfolio Website")).not.toBeInTheDocument();
  });
});

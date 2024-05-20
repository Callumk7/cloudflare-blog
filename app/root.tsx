import "@/tw.css";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400&family=Syne:wght@400;700;800&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/ico",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Callum Kloos | Developer and Designer" },
    {
      property: "og:title",
      content: "Callum Kooos | Developer and Designer",
    },
    {
      name: "description",
      content:
        "This is the personal website of Callum Kloos, a Product Designer and self-taught Web Developer.",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background font-grotesk text-foreground">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

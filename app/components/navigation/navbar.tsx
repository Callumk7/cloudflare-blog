import { Link, useLocation } from "@remix-run/react";
import { SocialLinks } from "./social-links";

export function Navbar() {
  const links = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "photography",
      href: "/photography",
    },
    {
      name: "about",
      href: "/about",
    },
  ];

  const location = useLocation();

  return (
    <nav className="border-foreground/20 flex w-full flex-row justify-between border-b px-48 py-3">
      <div className="flex flex-row gap-x-9">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={
              location.pathname === link.href ? "text-primary-1" : "text-foreground"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
      <SocialLinks />
    </nav>
  );
}

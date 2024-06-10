import { Link, useLocation, useNavigation } from "@remix-run/react";
import { SocialLinks } from "./social-links";
import clsx from "clsx";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "../layout/collapsible";
import { useEffect, useState } from "react";

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

export function Navbar() {
	const location = useLocation();

	// auto-collapse on navigate. useNavigation is a remix hook,
	// and we create an effect that changes the controlled state of
	// the collapsible to closed once the navigation is 'idle', which
	// is to say it has completed navigation.
	const navigation = useNavigation();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		if (navigation.state === "idle") {
			setIsMenuOpen(false);
		}
	}, [navigation.state]);

	const linksMarkup = links.map((link) => (
		<Link
			key={link.name}
			to={link.href}
			className={clsx(
				"rounded-md px-3 py-2 hover:bg-background-hover hover:text-violet-400",
				location.pathname === link.href ? "text-primary-1" : "text-foreground",
			)}
			prefetch="intent"
		>
			{link.name}
		</Link>
	));

	return (
		<nav className="flex fixed z-50 flex-row justify-between items-center py-5 px-10 w-full border-b lg:px-48 border-foreground/20 bg-background/80 backdrop-blur">
			<Collapsible
				className="block md:hidden"
				open={isMenuOpen}
				onOpenChange={setIsMenuOpen}
			>
				<CollapsibleTrigger className="data-[state=open]:text-primary-1/30">
					MENU
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className="flex flex-col gap-3 mt-4">{linksMarkup}</div>
				</CollapsibleContent>
			</Collapsible>
			<div className="hidden flex-row justify-evenly md:flex">{linksMarkup}</div>
			<SocialLinks className="self-start mt-2" />
		</nav>
	);
}

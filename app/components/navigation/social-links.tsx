import clsx from "clsx";
import { LinkedIn } from "../icons/linkedIn";
import { MailIcon } from "../icons/mail";
import { Twitter } from "../icons/twitter";
import { Github } from "../icons/github";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex flex-row items-center gap-x-3 md:gap-x-7")}>
      <a href="https://twitter.com/calk7" target="_blank" rel="noreferrer">
        <Twitter className="hover:fill-purple-400 transition-colors ease-in-out duration-100" />
      </a>
      <a href="https://github.com/Callumk7" target="_blank" rel="noreferrer">
        <Github className="hover:fill-purple-400 transition-colors ease-in-out duration-100" />
      </a>
      <a href="https://www.linkedin.com/in/callum-kloos" target="_blank" rel="noreferrer">
        <LinkedIn className="hover:fill-purple-400 transition-colors ease-in-out duration-100" />
      </a>
      <a href="mailto:callumkloos@gmail.com" target="_blank" rel="noreferrer">
        <MailIcon className="hover:fill-purple-400 transition-colors ease-in-out duration-100" />
      </a>
    </div>
  );
}

import { AboutSection } from "@/components/about/about-section";
import Profile from "@/components/about/profile";
import { Container } from "@/components/layout/container";
import { Admonition } from "@/components/ui/admonition";
import { Link } from "@remix-run/react";

export default function AboutPage() {
  return (
    <Container>
      <Admonition variant="note">
        If you are looking for an incredible new hire,{" "}
        <Link to="/cv" className="link">
          check out my CV
        </Link>{" "}
        and reach out!
      </Admonition>
      <div className="flex flex-col gap-8 items-center pt-24 lg:grid lg:grid-cols-3">
        <Profile />
        <div className="col-span-2">
          <AboutSection />
        </div>
      </div>
    </Container>
  );
}

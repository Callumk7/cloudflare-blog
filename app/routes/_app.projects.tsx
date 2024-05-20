import { Container } from "@/components/layout/container";
import { Outlet } from "@remix-run/react";

export default function ProjectsPage() {
  return (
    <Container width={"max"}>
      <Outlet />
    </Container>
  );
}

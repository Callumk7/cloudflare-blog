import { Outlet } from "@remix-run/react";
import { Container } from "@/components/layout/container";

export default function BlogLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

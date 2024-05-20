import { Navbar } from "@/components/navigation/navbar";
import { Outlet } from "@remix-run/react";

export default function AppLayout() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto mb-28 min-h-screen w-4/5 pt-28">
        <Outlet />
      </div>
      <footer className="py-4 pl-6 font-light text-slate-300">
        A Portfolio by{" "}
        <a className="link" href="https://twitter.com/calk7">
          Callum Kloos
        </a>
      </footer>
    </main>
  );
}

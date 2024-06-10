import { Navbar } from "@/components/navigation/navbar";
import { Outlet } from "@remix-run/react";

export default function AppLayout() {
  return (
    <main>
      <Navbar />
      <div className="pt-28 mx-auto mb-28 w-4/5 min-h-screen">
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

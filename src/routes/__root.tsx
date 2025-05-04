import { Outlet, createRootRoute } from "@tanstack/react-router";
import Sidebar from "../components/sidebar";
import Logo from "../components/logo";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="page-container">
      <Sidebar />
      <Logo />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

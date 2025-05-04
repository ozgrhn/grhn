import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="content">
      <h1>
        Hi, I'm <span>Gürhan</span>
      </h1>
      <p className="mt-2">A developer who loves building things</p>

      <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300 max-w-xl">
        <p>
          I believe in learning by doing and coding is my favorite way to create
          and explore.
        </p>
        <p>
          My goal? To become a well-known developer who builds useful,
          meaningful projects that make people's lives easier.
        </p>
        <p>
          Right now, I'm focused on improving my React and backend skills, and
          turning my ideas into real-world apps.
        </p>
        <p>
          I believe that great software is not just about code it's about
          understanding people and solving problems.
        </p>
      </div>
    </div>
  );
}

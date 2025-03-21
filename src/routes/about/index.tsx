import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-12" data-oid="1:cwtg0">
      <h1 className="text-3xl font-bold mb-6" data-oid="45g_pbb">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-4" data-oid="v_i5sr4">
        Welcome to our TanStack Router application! This is a modern React app
        built with:
      </p>
      <ul
        className="list-disc list-inside space-y-2 text-gray-600"
        data-oid="t1uioak"
      >
        <li data-oid="ft66jbq">File-based routing with TanStack Router</li>
        <li data-oid="peg-h2a">Data fetching with TanStack Query</li>
        <li data-oid="m:6nsnj">Styling with Tailwind CSS</li>
        <li data-oid="9u46848">Component library with Shadcn UI</li>
      </ul>
    </div>
  );
}

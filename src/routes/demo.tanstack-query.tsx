import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/demo/tanstack-query")({
  component: TanStackQueryDemo,
});

function TanStackQueryDemo() {
  const { data } = useQuery({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => data.results as { name: string }[]),
    initialData: [],
  });

  return (
    <div className="p-4" data-oid="vuvx.fo">
      <h1 className="text-2xl mb-4" data-oid="1qpgys.">
        People list from Swapi
      </h1>
      <ul data-oid=".tek6cn">
        {data.map((person) => (
          <li key={person.name} data-oid="k7gz4sx">
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { createFileRoute, useSearch } from "@tanstack/react-router"

function RouteComponent() {
  const { community } = useSearch<typeof Route>()
  return <div>Community: {community}</div>
}

export const Route = createFileRoute("/params")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      community: search.community as string,
    }
  },
})

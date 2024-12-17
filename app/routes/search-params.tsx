import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return <div></div>
}

export const Route = createFileRoute("/search-params")({
  component: RouteComponent,
})

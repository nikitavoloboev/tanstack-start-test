import { createFileRoute } from "@tanstack/react-router"
import { useAppContext } from "./_layout"

function RouteComponent() {
  const { someValue, setSomeValue } = useAppContext()
  console.log(someValue)
  return <div></div>
}

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
})

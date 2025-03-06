import PageHeaderWrapper from "@/components/page-header-wrapper"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div>
        <PageHeaderWrapper>
          <h1 className="text-xl font-semibold">Settings</h1>
        </PageHeaderWrapper>

        <div className="p-6">Settings</div>
      </div>
    </div>
  )
}

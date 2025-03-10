import PageHeaderWrapper from "@/components/page-header-wrapper"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/transactions")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <PageHeaderWrapper>
        <h1 className="text-xl font-semibold">Transactions</h1>
      </PageHeaderWrapper>

      <div className="p-6">Transactions</div>
    </div>
  )
}

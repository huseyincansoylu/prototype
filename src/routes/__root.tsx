import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { createRootRoute, Outlet } from "@tanstack/react-router"
//import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-[250px]">
            <Outlet />
          </main>
        </div>

        {/* <TanStackRouterDevtools /> */}
      </ThemeProvider>
    </>
  ),
})

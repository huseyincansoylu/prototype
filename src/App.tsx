import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "./components/ui/button"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Next</Button>
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App

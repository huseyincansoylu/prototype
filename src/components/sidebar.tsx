import {
  ChartBarIcon,
  ChartPieIcon,
  CircleHelp,
  Copy,
  SquareArrowOutUpRight,
} from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Link, useRouter } from "@tanstack/react-router"
import logo from "@/assets/Logo.svg"
import ProfileDropdown from "./profile-dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import arbitrum from "@/assets/arbitrum.svg"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

const navItems = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Agents",
    path: "/agents",
  },
  {
    title: "Pricing Plans",
    path: "/pricing",
  },
  {
    title: "Transactions",
    path: "/transactions",
  },
  {
    title: "Settings",
    path: "/settings",
  },
]

const Sidebar = () => {
  const router = useRouter()

  console.log(router, "router")

  return (
    <div className="fixed top-0 left-0 h-full border-r w-[250px] flex flex-col bg-[#343841] text-white text-sm">
      <div className="p-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <ProfileDropdown />
      </div>

      <div className="px-4 py-1">
        <Select>
          <SelectTrigger className="w-full text-white! bg-[#424853] border-0 rounded-sm">
            <SelectValue
              placeholder={
                <>
                  <img src={arbitrum} alt="network-logo" />
                  Arbitrum One
                </>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="line">
              <img src={arbitrum} alt="network-logo" />
              Arbitrum One
            </SelectItem>
            <SelectItem value="bar">
              <ChartBarIcon />
              Arbitrum Sepolia
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge>Test</Badge>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-[200px]">
                  <p>
                    Testnet for experimenting with Arbitrum. Enables to interact
                    without using real money
                  </p>
                </TooltipContent>
              </Tooltip>
            </SelectItem>
            <SelectItem value="pie">
              <ChartPieIcon />
              Base
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="px-4 py-2 flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <div className="text-gray-400">Wallet</div>
          <Badge
            asChild
            variant="secondary"
            className="text-white bg-[#424853] rounded-2xl"
          >
            <div>
              0x7s...f7cd <Copy />
            </div>
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <div>ETH 0.1827</div>
          <div className="text-gray-400">USD 215.45</div>
        </div>
      </div>

      <Separator className="mt-2 bg-gray-500" />

      <div className="flex-1 px-4 py-2">
        <nav className="flex flex-col">
          {navItems.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                className={
                  "flex items-center gap-3 p-3 rounded-sm transition-colors"
                }
                activeProps={{
                  className: "bg-[#424853]",
                }}
              >
                <span>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-4 ">
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center gap-2">
              <CircleHelp size={16} /> Help & Docs
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-52 text-sm" align="start">
            <div className="grid gap-4">
              <Link to="/about" className="flex justify-between items-center">
                Documentation <SquareArrowOutUpRight size={16} />
              </Link>
              <Link to="/about" className="flex justify-between items-center">
                FAQ <SquareArrowOutUpRight size={16} />
              </Link>
              <Link to="/about" className="flex justify-between items-center">
                Tutorials <SquareArrowOutUpRight size={16} />
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default Sidebar

"use client"

import { LineChart, BarChart2, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"

export function DashboardHeader() {
  return (
    <div className="flex h-16 items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <LineChart className="h-6 w-6" />
        <h2 className="text-2xl font-bold tracking-tight">StartupMetrics</h2>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon">
          <BarChart2 className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem>API</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </div>
  )
}
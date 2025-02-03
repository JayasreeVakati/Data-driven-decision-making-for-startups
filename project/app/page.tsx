import { DashboardShell } from "@/components/dashboard/shell"
import { DashboardHeader } from "@/components/dashboard/header"
import { Overview } from "@/components/dashboard/overview"
import { RecentUploads } from "@/components/dashboard/recent-uploads"
import { TopMetrics } from "@/components/dashboard/top-metrics"
import { DataUpload } from "@/components/dashboard/data-upload"

export default function Home() {
  return (
    <DashboardShell>
      <DashboardHeader />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <TopMetrics className="col-span-4" />
        <Overview className="col-span-4" />
        <div className="md:col-span-2 lg:col-span-3 space-y-4">
          <DataUpload />
          <RecentUploads />
        </div>
      </div>
    </DashboardShell>
  )
}
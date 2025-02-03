"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSpreadsheet, FileUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RecentUploads({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Data Uploads</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
          >
            <FileUp className="h-4 w-4" />
            Upload New Data
          </Button>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FileSpreadsheet className="h-8 w-8 text-blue-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Q1_Revenue_2024.csv</p>
                <p className="text-xs text-muted-foreground">Uploaded 2h ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FileSpreadsheet className="h-8 w-8 text-green-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium">User_Metrics_March.csv</p>
                <p className="text-xs text-muted-foreground">Uploaded 1d ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FileSpreadsheet className="h-8 w-8 text-orange-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Market_Analysis.csv</p>
                <p className="text-xs text-muted-foreground">Uploaded 3d ago</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
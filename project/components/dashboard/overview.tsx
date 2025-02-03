"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  {
    revenue: 400,
    users: 240,
    engagement: 80,
  },
  {
    revenue: 300,
    users: 139,
    engagement: 100,
  },
  {
    revenue: 200,
    users: 980,
    engagement: 200,
  },
  {
    revenue: 278,
    users: 390,
    engagement: 308,
  },
  {
    revenue: 189,
    users: 480,
    engagement: 120,
  },
  {
    revenue: 239,
    users: 380,
    engagement: 150,
  },
  {
    revenue: 349,
    users: 430,
    engagement: 180,
  },
]

export function Overview({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="hsl(var(--chart-3))"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
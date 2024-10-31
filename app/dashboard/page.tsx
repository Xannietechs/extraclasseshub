"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Clock, 
  TrendingUp,
  Award
} from "lucide-react"
import Link from "next/link"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { SubjectProgress } from "@/components/dashboard/subject-progress"
import { UpcomingClasses } from "@/components/dashboard/upcoming-classes"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">Track your progress and upcoming classes</p>
        </div>
        <Link href="/dashboard/classes">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Class
          </Button>
        </Link>
      </div>
      
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4 sm:p-6">
          <div className="flex items-center space-x-4">
            <Calendar className="h-8 sm:h-10 w-8 sm:w-10 text-primary p-2 bg-primary/10 rounded-full" />
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Upcoming Classes</h3>
              <p className="text-xl sm:text-2xl font-bold">3</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 sm:p-6">
          <div className="flex items-center space-x-4">
            <Clock className="h-8 sm:h-10 w-8 sm:w-10 text-primary p-2 bg-primary/10 rounded-full" />
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Hours Completed</h3>
              <p className="text-xl sm:text-2xl font-bold">24</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 sm:p-6">
          <div className="flex items-center space-x-4">
            <TrendingUp className="h-8 sm:h-10 w-8 sm:w-10 text-primary p-2 bg-primary/10 rounded-full" />
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Average Score</h3>
              <p className="text-xl sm:text-2xl font-bold">85%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 sm:p-6">
          <div className="flex items-center space-x-4">
            <Award className="h-8 sm:h-10 w-8 sm:w-10 text-primary p-2 bg-primary/10 rounded-full" />
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Achievements</h3>
              <p className="text-xl sm:text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-6">Subject Progress</h2>
          <SubjectProgress />
        </Card>

        <Card className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-6">Upcoming Classes</h2>
          <UpcomingClasses />
        </Card>
      </div>

      <Card className="p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-6">Recent Activity</h2>
        <RecentActivity />
      </Card>
    </div>
  )
}
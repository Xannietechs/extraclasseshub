"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"

const classes = [
  {
    subject: "Mathematics",
    topic: "Calculus",
    tutor: "Jane Smith",
    date: "Today",
    time: "2:00 PM",
  },
  {
    subject: "Physics",
    topic: "Mechanics",
    tutor: "John Brown",
    date: "Tomorrow",
    time: "3:30 PM",
  },
  {
    subject: "Chemistry",
    topic: "Organic Chemistry",
    tutor: "Sarah Wilson",
    date: "Wed, 24 Apr",
    time: "4:00 PM",
  },
]

export function UpcomingClasses() {
  return (
    <div className="space-y-4">
      {classes.map((class_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
        >
          <div className="space-y-1">
            <h3 className="font-medium">{class_.subject}</h3>
            <p className="text-sm text-muted-foreground">{class_.topic}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {class_.tutor}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {class_.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {class_.time}
              </span>
            </div>
          </div>
          <Button size="sm">Join</Button>
        </div>
      ))}
    </div>
  )
}
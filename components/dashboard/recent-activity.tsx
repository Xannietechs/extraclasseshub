"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  BookOpen, 
  CheckCircle2, 
  MessageSquare, 
  Star,
  Trophy
} from "lucide-react"

const activities = [
  {
    type: "class_completed",
    subject: "Mathematics",
    tutor: "Jane Smith",
    tutorAvatar: "/avatars/jane.png",
    time: "2 hours ago",
    icon: CheckCircle2,
    description: "Completed Calculus class",
  },
  {
    type: "achievement",
    title: "Perfect Attendance",
    description: "Attended 10 classes in a row",
    time: "1 day ago",
    icon: Trophy,
  },
  {
    type: "feedback",
    subject: "Physics",
    tutor: "John Brown",
    tutorAvatar: "/avatars/john.png",
    rating: 5,
    time: "2 days ago",
    icon: Star,
    description: "Received feedback for Physics class",
  },
  {
    type: "material",
    subject: "Chemistry",
    description: "New study material available",
    time: "3 days ago",
    icon: BookOpen,
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex gap-4">
          <div className="mt-1">
            <activity.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {activity.tutor && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.tutorAvatar} />
                    <AvatarFallback>
                      {activity.tutor.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
                <p className="text-sm font-medium">
                  {activity.type === "achievement" ? activity.title : activity.subject}
                </p>
              </div>
              <span className="text-sm text-muted-foreground">{activity.time}</span>
            </div>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            {activity.type === "feedback" && (
              <div className="flex gap-1 mt-1">
                {Array.from({ length: activity.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
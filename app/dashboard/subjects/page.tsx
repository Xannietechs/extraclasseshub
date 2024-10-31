"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock, Award } from "lucide-react"
import Link from "next/link"

const subjects = [
  {
    name: "Mathematics",
    description: "Advanced calculus, algebra, and trigonometry",
    progress: 75,
    tutors: 8,
    hoursCompleted: 24,
    nextClass: "Tomorrow, 2:00 PM",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Physics",
    description: "Mechanics, thermodynamics, and waves",
    progress: 60,
    tutors: 6,
    hoursCompleted: 18,
    nextClass: "Wed, 3:30 PM",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Chemistry",
    description: "Organic chemistry, chemical bonding, and reactions",
    progress: 45,
    tutors: 5,
    hoursCompleted: 15,
    nextClass: "Thu, 4:00 PM",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
]

export default function SubjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Subjects</h1>
        <p className="text-muted-foreground">Track your progress across different subjects</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => (
          <Card key={subject.name} className="overflow-hidden">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${subject.image})` }}
            />
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">{subject.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {subject.description}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className="h-2" />
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="space-y-1">
                  <Users className="h-4 w-4 text-primary" />
                  <p className="font-medium">{subject.tutors}</p>
                  <p className="text-muted-foreground">Tutors</p>
                </div>
                <div className="space-y-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="font-medium">{subject.hoursCompleted}</p>
                  <p className="text-muted-foreground">Hours</p>
                </div>
                <div className="space-y-1">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <p className="font-medium">{subject.nextClass}</p>
                  <p className="text-muted-foreground">Next Class</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" asChild>
                  <Link href={`/dashboard/subjects/${subject.name.toLowerCase()}`}>
                    View Details
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link href="/dashboard/classes">
                    Schedule Class
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
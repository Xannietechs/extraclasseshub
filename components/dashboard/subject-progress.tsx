"use client"

import { Progress } from "@/components/ui/progress"

const subjects = [
  {
    name: "Mathematics",
    progress: 75,
    topics: 15,
    topicsCompleted: 12,
  },
  {
    name: "Physics",
    progress: 60,
    topics: 18,
    topicsCompleted: 11,
  },
  {
    name: "Chemistry",
    progress: 45,
    topics: 20,
    topicsCompleted: 9,
  },
  {
    name: "Biology",
    progress: 90,
    topics: 16,
    topicsCompleted: 14,
  },
]

export function SubjectProgress() {
  return (
    <div className="space-y-6">
      {subjects.map((subject) => (
        <div key={subject.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">{subject.name}</span>
            <span className="text-sm text-muted-foreground">
              {subject.topicsCompleted}/{subject.topics} topics
            </span>
          </div>
          <Progress value={subject.progress} className="h-2" />
        </div>
      ))}
    </div>
  )
}
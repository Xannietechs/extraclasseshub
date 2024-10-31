"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ClassForm } from "@/components/dashboard/class-form"

export default function ClassesPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Classes</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Schedule Class
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Schedule New Class</DialogTitle>
            </DialogHeader>
            <ClassForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Upcoming Classes</h3>
          <div className="space-y-4">
            <ClassItem
              subject="Mathematics"
              tutor="Jane Smith"
              time="2:00 PM - 3:30 PM"
              date="Today"
            />
            <ClassItem
              subject="Physics"
              tutor="John Brown"
              time="4:00 PM - 5:30 PM"
              date="Tomorrow"
            />
          </div>
        </Card>
      </div>
    </div>
  )
}

function ClassItem({ subject, tutor, time, date }: { subject: string; tutor: string; time: string; date: string }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h4 className="font-medium">{subject}</h4>
        <p className="text-sm text-muted-foreground">{tutor}</p>
        <p className="text-sm text-muted-foreground">{time}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
      <Button variant="outline" size="sm">Join</Button>
    </div>
  )
}
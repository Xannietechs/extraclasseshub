import * as React from "react"
import { toast as sonnerToast } from "sonner"

export function toast({
  title,
  description,
  ...props
}: {
  title?: string
  description?: string
  [key: string]: any
}) {
  return sonnerToast(title, {
    description,
    ...props,
  })
}
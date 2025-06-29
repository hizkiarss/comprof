import React from 'react'
import { Badge } from "@/components/ui/badge"
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"


const badge = () => {
  return (
    <div className="flex flex-col items-center gap-2">
        <Badge variant="secondary">Secondary</Badge>
    </div>
  )
}

export default badge

"use client"
import Tasks from "@/src/components/Tasks"

const page = () => {
  return (
    <div>
      <h1>Completed Task</h1>
      <Tasks isCompleted={true}/>
    </div>
  )
}

export default page
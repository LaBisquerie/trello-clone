"use client"

import { Button } from "./ui/button"

export const Board = () => {
  return (
    <div className="h-full bg-red">
      <div className="flex justify-between">  
        <div>
          <input type="text" />
          <Button />
        </div>
      </div>
    </div>
  )
}
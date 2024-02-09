'use client'

import { useState } from 'react'
import { ChromePicker } from 'react-color'
import { usePrimaryColour } from './PrimaryColourContext'

export default function ColourPicker() {
  const [colour, setColour] = useState('')
  const [primaryColour, setPrimaryColour] = usePrimaryColour()

  return (
    <div className="mt-16">
      <ChromePicker 
        color= {primaryColour}
        onChange = {(color) => setPrimaryColour(color.hex)} />
    </div>
  )
}
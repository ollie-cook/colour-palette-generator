'use client'

import { ChromePicker } from 'react-color'
import { usePrimaryColour } from './PrimaryColourContext'
import Dialog from "../components/Dialog";

export default function ColourPicker() {
  const [primaryColour, setPrimaryColour] = usePrimaryColour()

  return (
    <div className="mt-16">
      <div className="w-full flex justify-between">
        <label htmlFor="colour-picker" className="font-semibold">Pick a primary colour</label>
        <Dialog /> 
      </div>
      <div id="colour-picker" className="mt-2">
        <ChromePicker 
          color={primaryColour}
          onChange = {(color) => setPrimaryColour(color.hex)} />
      </div>
    </div>
  )
}
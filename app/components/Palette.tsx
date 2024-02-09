'use client'

import { usePrimaryColour } from './PrimaryColourContext'

export default function Palette() {
  const [primaryColour] = usePrimaryColour()

  return (
    <div className="w-full mt-8 grid grid-cols-9 gap-8 ">
      <div className="w-full aspect-square" style={{backgroundColor: primaryColour}}>

      </div>
    </div>
  );
}
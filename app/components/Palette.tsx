'use client'

import { usePrimaryColour } from './PrimaryColourContext'
import hexToHSL, {hexToHSLArray} from '@/app/utils/functions.js'

export default function Palette() {
  const [primaryColour] = usePrimaryColour()

  const colours = generateColours(primaryColour)



  return (
    <div className="w-full mt-16">
      <h2 className="text-xl font-bold">Generated Palette</h2>
      <div className="grid grid-cols-9 gap-8 mt-2">
        {
          colours.map((colour, index) => (
            <div key={index} className="w-full aspect-square rounded-2xl" style={{backgroundColor: colour}}>

            </div>
          ))
        }
      </div>
    </div>
    
  );
}

const generateColours = (primaryColour: string) : string[] => {
  const colourStrings: string[] = Array(9).fill("");

  const primaryHSLObject = hexToHSLArray(primaryColour);

  const coloursHSL = Array(9).fill(null).map(() => ({ h: primaryHSLObject.h, s: 0, l: 0 }));
  coloursHSL[4] = primaryHSLObject;

  const firstLight = primaryHSLObject.l / 5;
  for (let i=0; i<4; i++) {
    coloursHSL[i].l = firstLight * (i+1)
  }

  const lightDiff = (100 - primaryHSLObject.l) / 5
  console.log(lightDiff)
  for (let i=5; i<9; i++) {
    coloursHSL[i].l = primaryHSLObject.l + lightDiff * (i-4)
  }

  coloursHSL.forEach((colour, index) => {
    const saturation = calculateSaturation(colour.l, primaryHSLObject.l, primaryHSLObject.s)
    colour.s = saturation

    colourStrings[index] = `hsl(${colour.h}, ${colour.s}%, ${colour.l}%)`
  })

  console.log(coloursHSL)


  return colourStrings
}

const calculateSaturation = (light: number, primaryLight: number, primarySaturation: number) => {
  const a = (primarySaturation - 100) / (primaryLight*primaryLight - 100*primaryLight);

  const saturation = a*light*light -100*a*light + 100;

  return saturation
}
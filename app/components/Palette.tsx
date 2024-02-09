'use client'

import { usePrimaryColour } from './PrimaryColourContext'
import {hexToHSLArray, HSLToHex} from '@/app/utils/functions.js'
import { MdContentCopy } from "react-icons/md";

export default function Palette() {
  const [primaryColour] = usePrimaryColour()

  const colours = generateColours(primaryColour)

  return (
    <div className="w-full mt-16">
      <h2 className="text-xl font-bold">Generated Palette</h2>
      <div className="grid grid-cols-9 gap-8 mt-2">
        {
          colours.map((colour, index) => (
            <div className="w-full flex flex-col items-center">
              <div key={index} className="w-full aspect-square rounded-2xl" style={{backgroundColor: colour.hsl}}></div>
              <div className="flex w-full justify-between p-1 mt-2 rounded-md bg-zinc-200">
                <p className="font-bold text-sm">{colour.hex}</p>
                <button onClick={() => navigator.clipboard.writeText(colour.hex)}>
                  <MdContentCopy />
                </button>
              </div>
              <div className="flex w-full justify-between p-1 mt-2 rounded-md bg-zinc-200">
                <p className="font-bold text-sm">{colour.hsl}</p>
                <button onClick={() => navigator.clipboard.writeText(colour.hsl)}>
                  <MdContentCopy />
                </button>
              </div>  
            </div>
          ))
        }
      </div>
    </div>
    
  );
}

const generateColours = (primaryColour: string) : {hex: string, hsl: string}[] => {
  const colourStrings: string[] = Array(9).fill("");

  const hexAndHSL: {hex: string, hsl: string}[] = Array(9).fill({hex: "", hsl: ""});

  const primaryHSLObject = hexToHSLArray(primaryColour);

  const coloursHSL = Array(9).fill(null).map(() => ({ h: primaryHSLObject.h, s: 0, l: 0 }));
  coloursHSL[4] = primaryHSLObject;

  const firstLight = primaryHSLObject.l / 5;
  for (let i=0; i<4; i++) {
    coloursHSL[i].l = parseFloat((firstLight*(i+1)).toFixed(0))
  }

  const lightDiff = (100 - primaryHSLObject.l) / 5
  for (let i=5; i<9; i++) {
    coloursHSL[i].l = parseFloat((primaryHSLObject.l+lightDiff*(i-4)).toFixed(0))
  }

  coloursHSL.forEach((colour, index) => {
    const saturation = calculateSaturation(colour.l, primaryHSLObject.l, primaryHSLObject.s)
    colour.s = saturation

    const hexString = HSLToHex(colour.h, colour.s, colour.l)
    const HSLString = `hsl(${colour.h}, ${colour.s}%, ${colour.l}%)`
    hexAndHSL[index] = {hex: hexString, hsl: HSLString}
  })

  return hexAndHSL
}

const calculateSaturation = (light: number, primaryLight: number, primarySaturation: number) => {
  const a = (primarySaturation - 100) / (primaryLight*primaryLight - 100*primaryLight);

  const saturation = parseFloat((a*light*light -100*a*light + 100).toFixed(0));

  return saturation
}
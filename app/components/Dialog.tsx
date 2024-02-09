import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  
} from "@/components/ui/dialog"
import { FaRegQuestionCircle } from "react-icons/fa";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button><FaRegQuestionCircle /></button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>How to use</DialogTitle>
          <DialogDescription>

          </DialogDescription>
        </DialogHeader>
        <p>Select a colour using the colour picker. The selected colour will be the middle colour of the generated palette. A colour palette of lighter and darker colours will be generated.</p>
        <h2 className="text-lg font-semibold mt-2">Tip</h2>
        <p>Pick a colour near the center of the colour square, for example colours roughly within the red square below will produce better palettes.</p>
        <img src="/colour-picker-screenshot.png" alt="Colour picker screenshot" className="w-1/2" />
      </DialogContent>
    </Dialog>
  )
}

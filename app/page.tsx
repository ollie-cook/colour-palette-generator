import ColourPicker from "./components/ColourPicker";
import Palette from "./components/Palette";
import PrimaryColourProvider from "./components/PrimaryColourContext";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-11/12 relative left-1/2 -translate-x-1/2 min-h-screen">
      <h1 className="text-6xl mt-4 font-bold">One Hue Palette Generator</h1>
      <p className="mt-1">
        Inspired by the book <a href="https://www.refactoringui.com/" target="_blank" className="underline">Refactoring UI</a> by <a href="https://adamwathan.me/" target="_blank" className="underline">Adam Wathan</a> and <a href="https://www.steveschoger.com/" target="_blank" className="underline">Steve Schoger</a>.
      </p>
      <PrimaryColourProvider>
        <ColourPicker />
        <Palette />
      </PrimaryColourProvider>
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
    </main>
  );
}

import ColourPicker from "./components/ColourPicker";
import Palette from "./components/Palette";
import PrimaryColourProvider from "./components/PrimaryColourContext";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-11/12 relative left-1/2 -translate-x-1/2">
      <h1 className="text-6xl mt-4 font-bold">Similar Colours Palette Generator</h1>
      <PrimaryColourProvider>
        <ColourPicker />
        <Palette />
      </PrimaryColourProvider>
    </main>
  );
}

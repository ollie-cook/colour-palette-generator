import ColourPicker from "./components/ColourPicker";
import Palette from "./components/Palette";
import PrimaryColourProvider from "./components/PrimaryColourContext";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-11/12 relative left-1/2 -translate-x-1/2">
      <PrimaryColourProvider>
        <ColourPicker />
        <Palette />
      </PrimaryColourProvider>
    </main>
  );
}

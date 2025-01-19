import Settings from "./settings/Settings";
import Visualizer from "./visualizer/Visualizer";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-row">
      <Settings />
      <Visualizer />
    </main>
  );
}

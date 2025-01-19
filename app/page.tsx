import SettingsTab from "./settings/SettingsTab";
import Visualizer from "./visualizer/Visualizer";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-row">
      <SettingsTab />
      <Visualizer />
    </main>
  );
}

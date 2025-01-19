export interface SettingsProps {
  isRunning: boolean;
  setIsRunning: () => void;
}

export default function SettingsTab({
  isRunning,
  setIsRunning,
}: SettingsProps) {
  return (
    <div className="flex flex-col text-center py-5 px-5 border border-r-black w-96 h-full">
      <h1 className="font-bold">Sorting Visualizer</h1>
      <button
        className="bg-slate-300"
        disabled={isRunning}
        onClick={setIsRunning}
      >
        START
      </button>
    </div>
  );
}

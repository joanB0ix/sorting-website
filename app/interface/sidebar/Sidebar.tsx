import { Algorithm } from "sorting_wasm";
import Settings from "./Settings";
import Stats from "./Stats";

interface SidebarProps {
  isRunning: boolean;
  selectedAlgorithm: Algorithm;
  onAlgorithmChange: (algo: Algorithm) => void;
  onToggleRunning: () => void;
  onGenerateNewArray: () => void;
  currentStep: number;
  totalSteps: number;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="flex flex-col items-center border-r border-stone-300 w-96 h-full p-5 gap-8">
      <h1 className="mb-4 text-xl text-center font-bold">Sorting Visualizer</h1>
      <Settings {...props} />
      <Stats currentStep={props.currentStep} totalSteps={props.totalSteps} />
    </div>
  );
}

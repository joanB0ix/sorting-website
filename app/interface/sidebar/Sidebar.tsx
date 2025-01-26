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
    <div className="flex flex-col items-center border-stone-300 w-full h-60 md:w-96 border-r-0 md:border-r md:h-full p-5 gap-8">
      <h1 className="mb-4 hidden md:block text-xl text-center font-bold">
        Sorting Visualizer
      </h1>
      <Settings {...props} />
      <Stats currentStep={props.currentStep} totalSteps={props.totalSteps} />
    </div>
  );
}

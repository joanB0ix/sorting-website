import { generateRandomInt32Array } from "@/utils/generateRandomArray";
import { useCallback, useEffect, useRef, useState } from "react";
import { Algorithm, sort, Step } from "sorting_wasm";
import Sidebar from "./sidebar/Sidebar";
import Visualizer from "./visualizer/Visualizer";

export default function MainInterface() {
  const [array, setArray] = useState<Int32Array>(
    generateRandomInt32Array(150, 50, 800)
  );
  const [idx1, setIdx1] = useState(-1);
  const [idx2, setIdx2] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm>(
    Algorithm.BubbleSort
  );

  const [steps, setSteps] = useState<Step[]>([]);
  const [stepIndex, setStepIndex] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const onAlgorithmChange = (algo: Algorithm) => {
    setSelectedAlgorithm(algo);
  };

  const onGenerateNewArray = useCallback(() => {
    if (!isRunning) {
      const newArray = generateRandomInt32Array(150, 50, 800);
      setArray(newArray);
      setIdx1(-1);
      setIdx2(-1);

      setSteps([]);
      setStepIndex(0);
    }
  }, [isRunning]);

  const clearSortInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const onToggleRunning = useCallback(() => {
    if (isRunning) {
      clearSortInterval();
      setIsRunning(false);
      return;
    }

    let finalSteps = steps;

    if (finalSteps.length === 0) {
      finalSteps = sort(array, selectedAlgorithm, 0) as Step[];
      setSteps(finalSteps);
      setStepIndex(0);
    }

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setStepIndex((prevIndex) => {
        if (prevIndex >= finalSteps.length) {
          clearSortInterval();
          setIsRunning(false);
          setIdx1(-1);
          setIdx2(-1);
          return prevIndex;
        }

        const currentStep = finalSteps[prevIndex];
        setIdx1(currentStep.index_a);
        setIdx2(currentStep.index_b);
        setArray(currentStep.snapshot);

        return prevIndex + 1;
      });
    }, 10);
  }, [isRunning, steps, array, selectedAlgorithm, clearSortInterval]);

  useEffect(() => {
    return () => {
      clearSortInterval();
    };
  }, [clearSortInterval]);

  return (
    <main className="flex h-full w-full flex-col-reverse md:flex-row overflow-hidden">
      <Sidebar
        isRunning={isRunning}
        selectedAlgorithm={selectedAlgorithm}
        onAlgorithmChange={onAlgorithmChange}
        onToggleRunning={onToggleRunning}
        onGenerateNewArray={onGenerateNewArray}
        currentStep={stepIndex}
        totalSteps={steps.length}
      />
      <Visualizer snapshot={array} idx1={idx1} idx2={idx2} />
    </main>
  );
}

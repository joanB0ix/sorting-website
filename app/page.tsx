"use client";

import { useEffect, useState } from "react";
import init, { Algorithm, sort } from "sorting_wasm";
import SettingsTab from "./settings/SettingsTab";
import Visualizer from "./visualizer/Visualizer";

export default function Home() {
  const [array, setArray] = useState<Int32Array>(
    generateRandomInt32Array(100, 10, 1000)
  );
  const [idx1, setIdx1] = useState(0);
  const [idx2, setIdx2] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    init()
      .then(() => {
        if (isMounted) {
          console.log("WASM module initialized");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error initializing WASM module:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">
            Loading WebAssembly...
          </p>
          <div className="mt-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  const runSort = () => {
    setIsRunning(true);
    const result = sort(array, Algorithm.QuickSort, 0).reverse();

    setInterval(() => {
      const currentStep = result.pop();
      if (currentStep) {
        setIdx1(currentStep.index_a);
        setIdx2(currentStep.index_b);
        setArray(currentStep.snapshot);
      }
    }, 10);
  };

  return (
    <main className="flex h-full w-full flex-row">
      <SettingsTab isRunning={isRunning} setIsRunning={runSort} />
      <Visualizer snapshot={array} idx1={idx1} idx2={idx2} />
    </main>
  );
}

function generateRandomInt32Array(
  length: number,
  min: number = 0,
  max: number = 1000
): Int32Array {
  const array = new Int32Array(length);

  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min; // Random value between min and max
  }

  return array;
}

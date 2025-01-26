"use client";

import { Algorithm } from "sorting_wasm";

interface SettingsProps {
  isRunning: boolean;
  selectedAlgorithm: Algorithm;
  onAlgorithmChange: (algo: Algorithm) => void;
  onToggleRunning: () => void;
  onGenerateNewArray: () => void;
}

const ALGORITHM_OPTIONS = [
  Algorithm.BubbleSort,
  Algorithm.InsertionSort,
  Algorithm.SelectionSort,
  Algorithm.MergeSort,
  Algorithm.HeapSort,
  Algorithm.QuickSort,
];

export default function Settings({
  isRunning,
  selectedAlgorithm,
  onAlgorithmChange,
  onToggleRunning,
  onGenerateNewArray,
}: SettingsProps) {
  return (
    <div>
      <h2 className="mb-4 text-xl text-center font-semibold">Controls</h2>
      <select
        id="algorithmSelector"
        className="mb-4 p-2 border border-gray-300 w-full"
        value={selectedAlgorithm}
        disabled={isRunning}
        onChange={(e) =>
          onAlgorithmChange(parseInt(e.target.value, 10) as Algorithm)
        }
      >
        {ALGORITHM_OPTIONS.map((algo) => (
          <option key={algo} value={algo}>
            {Algorithm[algo]}
          </option>
        ))}
      </select>

      <button
        className="mb-4 w-full bg-green-300 px-4 py-2 hover:bg-green-400"
        onClick={onToggleRunning}
      >
        {isRunning ? "STOP" : "START"}
      </button>

      <button
        className="bg-green-300 w-full px-4 py-2 hover:bg-green-400 disabled:opacity-50"
        onClick={onGenerateNewArray}
        disabled={isRunning}
      >
        NEW
      </button>
    </div>
  );
}

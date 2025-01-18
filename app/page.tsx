"use client";

import { useState } from "react";
// The default import from your `wasm-pack` build is typically the init function,
// and named exports are your Rust-compiled functions/constants.
import init, { Algorithm, Snapshot, sort } from "sorting_wasm";

export default function Home() {
  // Store the current array
  const [values, setValues] = useState<Int32Array>(Int32Array.from([]));

  // Optional: store a sorted version or reuse the same state
  const [sortedValues, setSortedValues] = useState<Int32Array>(
    Int32Array.from([])
  );

  // Generate random array of length 10
  function handleGenerate() {
    const arr = generateRandomInt32Array(10, 100);
    setValues(arr);
    setSortedValues(Int32Array.from([])); // reset sorted
  }

  // Call into WASM
  async function handleSort() {
    await init();

    const result = sort(values, Algorithm.BubbleSort, Snapshot.Full);
    console.log("WASM sort result:", result);

    setSortedValues(result.at(-1)!.snapshot);
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleGenerate}>Generate Array</button>
      <button onClick={handleSort} style={{ marginLeft: 8 }}>
        Sort with WASM
      </button>
      {values.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <p>Original Int32Array:</p>
          <ul>
            {Array.from(values).map((num, idx) => (
              <li key={idx}>{num}</li>
            ))}
          </ul>
        </div>
      )}

      {sortedValues && (
        <div style={{ marginTop: 20 }}>
          <p>Sorted Int32Array:</p>
          <ul>
            {Array.from(sortedValues).map((num, idx) => (
              <li key={idx}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * Utility to generate a positive Int32Array of the given length.
 * By default, it uses the max signed 32-bit integer as the upper limit,
 * but you can provide a smaller `max`.
 */
function generateRandomInt32Array(length: number, max = 2147483647) {
  const array = new Int32Array(length);
  for (let i = 0; i < length; i++) {
    // random integer in [0..max) (clamped at 2147483647, the 32-bit max)
    array[i] = Math.floor(Math.random() * Math.min(max, 2147483647));
  }
  return array;
}

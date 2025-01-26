// Visualizer.tsx
"use client";
import Bar from "./Bar";

export interface VisualizerProps {
  snapshot: Int32Array;
  idx1: number;
  idx2: number;
}

/**
 * Dynamically compute a green shade based on the bar's relative height.
 * A taller bar => darker green; shorter bar => lighter green.
 */
function getBarColor(
  index: number,
  idx1: number,
  idx2: number,
  value: number,
  maxHeight: number
): string {
  if (index === idx1 || index == idx2) return "red";

  const ratio = value / maxHeight;

  const lightness = 100 - ratio * 90;

  return `hsl(120, 100%, ${lightness}%)`;
}

export default function Visualizer({ snapshot, idx1, idx2 }: VisualizerProps) {
  if (!snapshot || snapshot.length === 0) return null;

  const maxHeight = Math.max(...snapshot);

  return (
    <div className="w-full h-full overflow-auto flex flex-row justify-center items-end">
      {Array.from(snapshot).map((value, index) => {
        const color = getBarColor(index, idx1, idx2, value, maxHeight);
        return <Bar key={index} height={value} color={color} />;
      })}
    </div>
  );
}

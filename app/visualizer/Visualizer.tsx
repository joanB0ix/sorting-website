export interface VisualizerProps {
  snapshot: Int32Array;
  idx1: number;
  idx2: number;
}

export default function Visualizer({ snapshot, idx1, idx2 }: VisualizerProps) {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      {Array.from(snapshot).map((value, index) => {
        if (index === idx1) {
          return (
            <div
              key={index}
              className="border border-x-1 border-y-2 w-2 bg-red-400"
              style={{ height: `${value}px` }}
            ></div>
          );
        } else if (index === idx2) {
          return (
            <div
              key={index}
              className="border border-x-1 border-y-2 w-2 bg-green-400"
              style={{ height: `${value}px` }}
            ></div>
          );
        } else {
          return (
            <div
              key={index}
              className="border border-x-1 border-y-2 w-2 bg-slate-400"
              style={{ height: `${value}px` }}
            ></div>
          );
        }
      })}
    </div>
  );
}

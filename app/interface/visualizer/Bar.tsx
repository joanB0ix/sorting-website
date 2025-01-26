"use client";

interface BarProps {
  height: number;
  color: string;
}

export default function Bar({ height, color }: BarProps) {
  return (
    <div
      className="border border-x-1 border-y-2 w-2"
      style={{
        height: `${height}px`,
        backgroundColor: color,
      }}
    />
  );
}

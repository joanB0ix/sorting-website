"use client";

export default function SettingsTab() {
  return (
    <div className="flex flex-col text-center py-5 px-5 border border-r-black w-96 h-full">
      <h1 className="font-bold">Sorting Visualizer</h1>
      <select value={"selected"} onChange={() => console.log("lmfao")}>
        <option value="">-- Choose an option --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
}

interface StatsProps {
  currentStep: number;
  totalSteps: number;
}

export default function Stats({ currentStep, totalSteps }: StatsProps) {
  return (
    <div className="hidden md:block w-full">
      <h2 className="mb-4 text-xl text-center font-semibold">Stats</h2>
      <p>Current step: {currentStep}</p>
      <p>Total steps: {totalSteps}</p>
    </div>
  );
}

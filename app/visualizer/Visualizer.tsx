export default function Visualizer() {
  const generateRandomInt32 = () => {
    return (
      Math.floor(Math.random() * (2 ** 31 - 1)) * (Math.random() < 0.5 ? -1 : 1)
    );
  };

  const randomInt32Array = Array.from({ length: 50 }, () =>
    generateRandomInt32()
  );

  const normalizedHeights = randomInt32Array.map((num) => {
    const absValue = Math.abs(num);
    const maxInt32 = 2 ** 31 - 1;
    return Math.floor((absValue / maxInt32) * 700) + 100;
  });

  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      {normalizedHeights.map((height, index) => {
        return (
          <div
            key={index}
            className="border border-x-1 border-y-2 w-2"
            style={{ height: `${height}px` }}
          ></div>
        );
      })}
    </div>
  );
}

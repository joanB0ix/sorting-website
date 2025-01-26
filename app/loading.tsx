export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold text-gray-700">
          Loading WebAssembly...
        </p>
        <div className="mt-4 h-8 w-8 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
      </div>
    </div>
  );
}

"use client";

import useWasmLoader from "@/hooks/useWasmLoader";
import MainInterface from "./interface/MainInterface";
import Loading from "./loading";

export default function Home() {
  const { isLoading, error } = useWasmLoader();

  if (error) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-red-50">
        <p className="text-xl font-semibold text-red-500">
          Error loading WebAssembly: {error.message}
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return <MainInterface />;
}

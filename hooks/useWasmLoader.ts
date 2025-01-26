import { useEffect, useState } from "react";
import init from "sorting_wasm";

export default function useWasmLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    init()
      .then(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log("Error initializing WASM module:", err);
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { isLoading, error };
}

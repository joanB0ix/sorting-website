/* tslint:disable */
/* eslint-disable */
export function sort(arr: Int32Array, algorithm: Algorithm, snapshot: Snapshot): (Step)[];
export enum Algorithm {
  BubbleSort = 0,
  InsertionSort = 1,
  SelectionSort = 2,
  HeapSort = 3,
  QuickSort = 4,
  MergeSort = 5,
}
export enum Snapshot {
  Full = 0,
  Indices = 1,
}
export class Step {
  free(): void;
  constructor(index_a: number, index_b: number, snapshot: Int32Array);
  readonly snapshot: Int32Array;
  readonly index_a: number;
  readonly index_b: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_step_free: (a: number, b: number) => void;
  readonly step_new: (a: number, b: number, c: number, d: number) => number;
  readonly step_snapshot: (a: number) => [number, number];
  readonly step_index_a: (a: number) => number;
  readonly step_index_b: (a: number) => number;
  readonly sort: (a: number, b: number, c: number, d: number) => [number, number];
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __externref_drop_slice: (a: number, b: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

export {};

declare global {
  interface ErrorConstructor {
    stackTraceLimit: number;
  }

  const process: any;
  const setImmetidate: () => void;
}

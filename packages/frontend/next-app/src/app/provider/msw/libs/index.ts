async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    worker.start();
  }
}
console.log(process.env.NODE_ENV);

export async function initMocksWhenDevelopment() {
  if (process.env.NODE_ENV === "development") {
    initMocks();
  }
}

import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
const server = setupServer(...handlers);

import { handlers } from "@/app/msw";

import { afterAll, afterEach, beforeAll } from "vitest";
// beforeAll()에서 msw 서버 시작
beforeAll(() => {
  console.log("Server Open!");
  server.listen();
});

// afterEach()에서 msw 서버 리셋
afterEach(() => server.resetHandlers());

// afterAll()에서 msw 서버 종료
afterAll(() => server.close());

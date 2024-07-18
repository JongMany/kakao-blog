import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "@/app/msw/index";

const server = setupServer(...handlers);

beforeAll(() => {
  // 환경 변수 설정
  process.env.NEXT_PUBLIC_API_URL = "http://127.0.0.1:8080/api";
  server.listen();
}); // 서버 설정

afterEach(() => server.resetHandlers()); // 각각 테스트 요청 마다 핸들러 초기화

afterAll(() => server.close()); // 테스트가 끝난 후 종료

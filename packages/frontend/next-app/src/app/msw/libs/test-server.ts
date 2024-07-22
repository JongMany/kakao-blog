import { handlers } from "@/app/msw/handlers/handlers";
import { setupServer } from "msw/node";

export const server = setupServer(...handlers);

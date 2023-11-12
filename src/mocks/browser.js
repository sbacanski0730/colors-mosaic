import { setupWorker } from "msw/browser";
import handlers from "./handlers.js";

export const worker = setupWorker(...handlers);

export default worker;

window.mocks = {
  getMocks: () => {
    fetch("/login", {
      method: "post",
    });
  },
};

import { toJs } from "./parser";

addEventListener("message", (event) => {
  postMessage(toJs(event.data));
});

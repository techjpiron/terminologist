import { toXml } from "./parser";

addEventListener("message", (event) => {
  postMessage(toXml(event.data));
});

import parse from "./parse";

addEventListener("message", (event) => {
  postMessage(parse(event.data));
});

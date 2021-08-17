import * as xmlparser from "fast-xml-parser";
import options from "./options";

export const toJs = (data) => {
  if (!data) {
    return {};
  }
  return xmlparser.parse(data, options);
};

export const toXml = (data) => {
  const parser = new xmlparser.j2xParser(options);
  return parser.parse(data);
};

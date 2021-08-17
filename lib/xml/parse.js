import * as xmlparser from "fast-xml-parser";
import options from "./options";

const parse = (file) => {
  if (!file) {
    return {};
  }
  return xmlparser.parse(file, options);
};

export default parse;

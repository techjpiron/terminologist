import * as xmlparser from "fast-xml-parser";

const testData = `<?xml version='1.0' encoding='UTF-16' ?><mtf><conceptGrp><concept>1</concept><transacGrp><transac type="origination">julien (pro)</transac><date>2021-03-01T11:21:32</date></transacGrp><transacGrp><transac type="modification">julien (pro)</transac><date>2021-03-01T11:22:12</date></transacGrp><descripGrp><descrip type="Auteur">Julien</descrip></descripGrp><languageGrp><language lang="EN" type="English"/><termGrp><term>home</term><transacGrp><transac type="origination">julien (pro)</transac><date>2021-03-01T11:21:32</date></transacGrp><transacGrp><transac type="modification">julien (pro)</transac><date>2021-03-01T11:21:40</date></transacGrp></termGrp></languageGrp><languageGrp><language lang="FR" type="French"/><termGrp><term>maison</term><transacGrp><transac type="origination">julien (pro)</transac><date>2021-03-01T11:21:37</date></transacGrp><transacGrp><transac type="modification">julien (pro)</transac><date>2021-03-01T11:21:37</date></transacGrp><descripGrp><descrip type="Note">Ceci est une note</descrip></descripGrp></termGrp><termGrp><term>domicile</term><transacGrp><transac type="origination">julien (pro)</transac><date>2021-03-01T11:21:44</date></transacGrp><transacGrp><transac type="modification">julien (pro)</transac><date>2021-03-01T11:21:44</date></transacGrp><descripGrp><descrip type="Status">preferred</descrip></descripGrp><descripGrp><descrip type="Auteur">Julien</descrip></descripGrp></termGrp></languageGrp></conceptGrp><conceptGrp><concept>2</concept><transacGrp><transac type="origination">julien (pro)</transac><date>2021-03-01T11:22:40</date></transacGrp><transacGrp><transac type="modification">julien (pro)</transac><date>2021-03-01T11:22:57</date></transacGrp><languageGrp><language lang="EN" type="English"/><termGrp><term>apple</term><transacGrp><transac type="origination">julien (pro)</transac><date>2021-03-01T11:22:40</date></transacGrp><transacGrp><transac type="modification">julien (pro)</transac><date>2021-03-01T11:22:40</date></transacGrp></termGrp></languageGrp><languageGrp><language lang="FR" type="French"/><descripGrp><descrip type="Definition">Ceci est une définition</descrip></descripGrp><termGrp><term>pomme</term><transacGrp><transac type="origination">julien (pro)</transac><date>2021-03-01T11:22:44</date></transacGrp><transacGrp><transac type="modification">julien (pro)</transac><date>2021-03-01T11:22:44</date></transacGrp><descripGrp><descrip type="Auteur">Julien</descrip></descripGrp></termGrp></languageGrp></conceptGrp></mtf>`;

const options = {
  attributeNamePrefix: "_",
  attrNodeName: false, //default is 'false'
  textNodeName: "value",
  ignoreAttributes: false,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  //attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
  //tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ["parse-me-as-string"]
};
const parsedData = xmlparser.parse(testData, options);

const parse = () => parsedData;

export default parse;

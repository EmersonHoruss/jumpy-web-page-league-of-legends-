import { extra } from "./extraFunctions.js";

const mainPath = "../assets/img/champs/";

// LINES' DATA
const lines = [
  {
    lineName: "top",
    champs: ["jayce", "ryze", "teemo", "vayne"],
    format: "jpg",
    pathImageChamps: [],
  },
  {
    lineName: "jungle",
    champs: ["diana", "ekko"],
    format: "jpg",
    pathImageChamps: [],
  },
  {
    lineName: "middle",
    champs: [
      "annie",
      "corki",
      "diana",
      "ekko",
      "lissandra",
      "talon",
      "viktor",
      "ziggs",
    ],
    format: "jpg",
    pathImageChamps: [],
  },
  {
    lineName: "bot/adc",
    champs: [
      "caitlyn",
      "ezreal",
      "jhin",
      "jinx",
      "miss-fortune",
      "sivir",
      "tristana",
      "xayah",
    ],
    format: "jpg",
    pathImageChamps: [],
  },
  {
    lineName: "bot/support",
    champs: ["brand", "lux"],
    format: "jpg",
    pathImageChamps: [],
  },
];

(function formEachPathImageChamps() {
  lines.forEach((line) =>
    line.champs.forEach((champ) =>
      line.pathImageChamps.push(
        mainPath + line.lineName + "/" + champ + "." + line.format
      )
    )
  );
})();

export function getLineData() {
  // formEachPathImageChamps();
  return lines;
}

export function getLineDataByLine(requiredLine) {
  // formEachPathImageChamps();
  requiredLine = extra.hasScript(requiredLine)
    ? extra.convertScriptSlash(requiredLine)
    : requiredLine;
  return lines.find((line) => line.lineName === requiredLine);
}

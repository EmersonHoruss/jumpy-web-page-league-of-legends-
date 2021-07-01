import { loadLikedChampsCarouselByLine } from "./likedChampsCarousel.js";
// Constants
const d = document;

const generalLineSelectors = [".lines", "*"];
const specificLineSelectors = [
  "top",
  "jungle",
  "middle",
  "bot-adc",
  "bot-support",
];
const formedObjectsLineSelectors = [];

// ****** Function help invoked function and exported function ******
// Form an object with the line's name and its tags
function formTagLine(line) {
  const tagLines = [];
  generalLineSelectors.forEach((e, i) => {
    i === 0
      ? tagLines.push(e + " ." + line)
      : tagLines.push(generalLineSelectors[i - 1] + " ." + line + " " + e);
  });
  return tagLines;
}

// ****** Auto invoked function ******
// Form all lines
(function formLines() {
  specificLineSelectors.forEach((e) =>
    formedObjectsLineSelectors.push({ name: e, tags: formTagLine(e) })
  );
})();

// return true if the event matches with one line's tag
function matchLineEvent(_event, tagLines) {
  let isMatch = false;
  tagLines.forEach((line) => {
    isMatch === true
      ? null
      : _event.target.matches(line)
      ? (isMatch = true)
      : null;
  });
  return isMatch;
  // console.log(isMatch);
}

function assignateFunctionLine(_event) {
  // console.log(_event)
  formedObjectsLineSelectors.forEach((e) => {
    // matchLineEvent(_event, e.tags) ? console.log(e.name) : null
    if (matchLineEvent(_event, e.tags)) loadLikedChampsCarouselByLine(e.name);
  });
  // formedObjectsLineSelectors.forEach((e) => matchLineEvent(_event,e.tags));
}
// loadLikedChampsCarouselByLine

// exporting functionality
export function loadLikedChampsCarousel() {
  d.addEventListener("click", (e) => {
    // const $line = d.querySelector(lines[0]);
    // console.log(formedObjectsLineSelectors);
    assignateFunctionLine(e);
    // if (e.target.matches(lines[0] + " *")) console.log("yes");
  });
}

export function loadLikedChampsCarouselByLineAtLoadPage() {
  d.addEventListener("load", (e) => {
    const tag = '.lordd-horuss-liked-champs .champs'
    // const body = d.querySelector("body");
    if (e.target.matches(tag)) console.log("yes");
  });
}

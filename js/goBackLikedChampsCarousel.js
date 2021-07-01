import { getLineData, getLineDataByLine } from "./lineData.js";
// Constants
const d = document;
const goButton = [
  ".champs .go-button",
  ".champs .go-button svg",
  ".champs .go-button svg path",
];
const backButton = [
  ".champs .back-button",
  ".champs .back-button svg",
  ".champs .back-button svg path",
];

const selectors = ".champs .champ";
const $selectors = d.querySelectorAll(selectors);

function matchGoButtonWithETarget(_event) {
  return (
    _event.target.matches(goButton[0]) ||
    _event.target.matches(goButton[1]) ||
    _event.target.matches(goButton[2])
  );
}

function getLineName() {
  const srcAttribute =
    $selectors[0].children[1].children[0].getAttribute("src");
  const splitedSrcAttribute = srcAttribute.split("/");
  const lineName = splitedSrcAttribute[splitedSrcAttribute.length - 2];
  console.log(srcAttribute);
  console.log(splitedSrcAttribute);
  console.log(lineName);
  return lineName;
}

function getPositionFirstCurrentChamps(lineName) {
  const srcAttribute =
    $selectors[0].children[1].children[0].getAttribute("src");
  console.log(srcAttribute);
  
  const positionFirstCurrentChamp = getLineDataByLine(
    lineName
  ).pathImageChamps.findIndex(
    (pathImageChamp) => pathImageChamp === srcAttribute
  );
  console.log(getLineDataByLine(lineName));
  console.log(positionFirstCurrentChamp);
  return positionFirstCurrentChamp;
}

function adaptPosition(position, lineName, action) {
  const champsLength = getLineDataByLine(lineName).champs.length;
  if (action === "go") {
    position = position + 1 === champsLength - 1 ? 0 : position + 1;
  } else if (action === "back") {
    position = position - 1 === -1 ? champsLength - 2 : position - 1;
  }
  return position;
}

function getPositionFirstItemCarousel(lineName, action) {
  const positionFirstCurrentChamp = getPositionFirstCurrentChamps(lineName);
  return action === "go"
    ? adaptPosition(positionFirstCurrentChamp, lineName, action)
    : action === "back"
    ? adaptPosition(positionFirstCurrentChamp, lineName, action)
    : null;
}

function walkSelector($selector, position, lineName) {
  const dataLine = getLineDataByLine(lineName);
  const titleChamp = dataLine.champs[position];
  const pathImageChamp = dataLine.pathImageChamps[position];

  for (let index = 0; index < $selector.childElementCount; index++) {
    index === 0
      ? ($selector.children[index].children[0].innerHTML = titleChamp)
      : $selector.children[index].children[0].setAttribute(
          "src",
          pathImageChamp
        );
  }
}

function adaptLineName(lineName) {
  const bot = 'bot/'
  return lineName === 'adc' ? bot + lineName : lineName === 'support' ? bot + lineName : lineName
}

function loadImgs(action) {
  let lineName = getLineName();
  lineName = adaptLineName(lineName) 
console.log(lineName)
  const positionFirstItemCarousel = getPositionFirstItemCarousel(
    lineName,
    action
  );
  // // updateChamps;
  $selectors.forEach(($selector, index) =>
    // console.log($selector.childElementCount)
    walkSelector($selector, index + positionFirstItemCarousel, lineName)
  );

  // console.log(positionFirstItemCarousel);
}

function matchBackButtonWithETarget(_event) {
  return (
    _event.target.matches(backButton[0]) ||
    _event.target.matches(backButton[1]) ||
    _event.target.matches(backButton[2])
  );
}

function goBack(_event) {
  if (matchGoButtonWithETarget(_event)) loadImgs("go");
  else if (matchBackButtonWithETarget(_event)) loadImgs("back");
}

// exporting functionality
export function goBackLikedChampsCarousel() {
  d.addEventListener("click", (e) => {
    goBack(e);
  });
}

import { getLineDataByLine } from "./lineData.js";

const d = document;
const selectors = ".champs .champ";
const $selectors = d.querySelectorAll(selectors);
// const $childrenSelectors = $selectors.children();

function walkSelector($selector, number, lineName) {
  const dataLine = getLineDataByLine(lineName);
  const titleChamp = dataLine.champs[number];
  const pathImageChamp = dataLine.pathImageChamps[number];

  for (let index = 0; index < $selector.childElementCount; index++) {
    index === 0
      ? ($selector.children[index].children[0].innerHTML = titleChamp)
      : $selector.children[index].children[0].setAttribute("src", pathImageChamp);
  }
}

export function loadLikedChampsCarouselByLine(lineName) {
  $selectors.forEach(($selector, index) =>
    // console.log($selector.childElementCount)
    walkSelector($selector,index,lineName)
  );
  // // console.log(getLineDataByLine(lineName));
}


// export function loadLikedChampsCarouselByLineAtLoadPage(){

// }
// h3 name
// $selectors.forEach($selector=>console.log($selector.children[0].children[0]))

// Image
// $selectors.forEach($selector=>console.log($selector.children[1].children[0]))

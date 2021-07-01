// Constants
const d = document;

const mainCarousel = ".main-carousel";
const goButton = [
  ".go-button", 
  ".go-button svg", 
  ".go-button svg path"
];
const backButton = [
  ".back-button",
  ".back-button svg",
  ".back-button svg path",
];

const mainUrl = "../assets/img/main-carousel/secondSet/";
const itemsCarousel = ["league-legends.jpg", "champs.png", "lordd-horuss.JPG"];
const eachUrlItem = [];

// function to join each carrousel's item with the main url
(function getEachUrlItem() {
  itemsCarousel.forEach((e) => {
    eachUrlItem.push(`url('${mainUrl}${e}')`);
  });
})();

// tell us if match with an element of goButton array with the event's target
function matchGoButtonWithETarget(e) {
  return (
    e.target.matches(goButton[0]) ||
    e.target.matches(goButton[1]) ||
    e.target.matches(goButton[2])
  );
}

// tell us if match with an element of backButton array with the event's target
function matchBackButtonWithETarget(e) {
  return (
    e.target.matches(backButton[0]) ||
    e.target.matches(backButton[1]) ||
    e.target.matches(backButton[2])
  );
}

function getPositionItemCarousel(urlItem) {
  const parts = urlItem.split("/");
  const itemCarousel = parts[parts.length - 1].split('"');
  const exactItemCarousel = itemCarousel[0];
  return itemsCarousel.indexOf(exactItemCarousel);
}

function goItemCarousel($mainCarousel, backgroundImage) {
  const itemCarousel = getPositionItemCarousel(backgroundImage);
  itemCarousel === eachUrlItem.length - 1
    ? ($mainCarousel.style.backgroundImage = eachUrlItem[0])
    : ($mainCarousel.style.backgroundImage = eachUrlItem[itemCarousel + 1]);
}

function backItemCarousel($mainCarousel, backgroundImage) {
  const itemCarousel = getPositionItemCarousel(backgroundImage);
  itemCarousel === 0
    ? ($mainCarousel.style.backgroundImage =
        eachUrlItem[eachUrlItem.length - 1])
    : ($mainCarousel.style.backgroundImage = eachUrlItem[itemCarousel - 1]);
}

// exporting functionality
export function goBackItemCarousel() {
  d.addEventListener("click", (e) => {
    const $mainCarousel = d.querySelector(mainCarousel);
    let backgroundImage = $mainCarousel.style.backgroundImage;
    if (matchGoButtonWithETarget(e)) {
      backgroundImage
        ? goItemCarousel($mainCarousel, backgroundImage)
        : ($mainCarousel.style.backgroundImage = eachUrlItem[1]);
    }
    if (matchBackButtonWithETarget(e)) {
      backgroundImage
        ? backItemCarousel($mainCarousel, backgroundImage)
        : ($mainCarousel.style.backgroundImage =
            eachUrlItem[eachUrlItem.length - 1]);
    }
  });
}

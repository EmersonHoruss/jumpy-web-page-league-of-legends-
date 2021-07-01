import { helloWorld } from "./testingConnection.js";
import { goBackItemCarousel } from "./mainCarrousel.js";
import { loadLikedChampsCarousel, loadLikedChampsCarouselByLineAtLoadPage } from "./likedChamps.js"
import { goBackLikedChampsCarousel } from "./goBackLikedChampsCarousel.js";
// helloWorld()

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  helloWorld()
  goBackItemCarousel()
  loadLikedChampsCarousel()
  loadLikedChampsCarouselByLineAtLoadPage()
  goBackLikedChampsCarousel()
});


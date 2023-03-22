//    Function slide() able users to slide when they click in the right or left arrow
function slide(nameContainer) {
  const bannerContainer = document.querySelector("." + nameContainer);
  const arrowRight = document.querySelector(".JsNext");
  const arrowLeft = document.querySelector(".JsPreview");
  let nbr = bannerContainer.children.length;
  let i = 0;

  if(nbr > 1){
    arrowRight.style.display = "block";
    arrowLeft.style.display = "none";
    arrowRight.addEventListener("click", () => {
      bannerContainer.style.right = "calc(100% + 10px)";
      arrowRight.style.display = "none";
      arrowLeft.style.display = "inline-block";
    });
    arrowLeft.addEventListener("click", () => {
      arrowRight.style.display = "inline-block";
      bannerContainer.style.right = "0";
      arrowLeft.style.display = "none";
    });
  }
  
}
//    FUNCTION TO SLIDE WHEN USERS CLICK IN THE RIGHT OR LEFT ARROW
function slide(nameContainer) {
  let a = "." + nameContainer;
  const bannerContainer = document.querySelector(a);
  const arrowRight = document.querySelector(".JsNext");
  const arrowLeft = document.querySelector(".JsPreview");
  console.log(a);

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
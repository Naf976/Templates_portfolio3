//    FUNCTION TO SLIDE WHEN USERS CLICK IN THE RIGHT OR LEFT ARROW
function slide() {
  const bannerContain = document.querySelector("#presentation");
  const arrowRight = document.querySelector(".JsNext");
  const arrowLeft = document.querySelector(".JsPreview");

  arrowRight.addEventListener("click", () => {
    bannerContain.style.right = "calc(100% + 10px)";
    arrowRight.style.display = "none";
    arrowLeft.style.display = "inline-block";
  });
  arrowLeft.addEventListener("click", () => {
    arrowRight.style.display = "inline-block";
    bannerContain.style.right = "0";
    arrowLeft.style.display = "none";
  });
}
slide();

const accordionHeadingEls = document.querySelectorAll(".accordion-heading");
function accordion() {
  for (let item of accordionHeadingEls) {
    let accordionIcon = item.lastElementChild;
    item.addEventListener("click", function () {
      let accordionDetails = this.nextElementSibling;
      for (let item2 of accordionHeadingEls) {
        if (item2 != item) {
          item2.nextElementSibling.style.maxHeight = null;
          item2.lastElementChild.classList.remove("accordion-icon--turn");
        }
      }
      accordionIcon.classList.toggle("accordion-icon--turn");
      if (accordionDetails.style.maxHeight != 0) {
        accordionDetails.style.maxHeight = null;
      } else {
        accordionDetails.style.maxHeight = accordionDetails.scrollHeight + "px";
      }
    });
  }
}
accordion();
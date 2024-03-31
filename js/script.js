const elThemeBtn = document.querySelector(".js-local-theme");
const elSearchInput = document.querySelector(".js-input");
const elCards = document.querySelectorAll(".js-cards");
const elCardTitle = document.querySelectorAll(".js-card-title");

elThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("theme");
});

// // elSearchInput.addEventListener("change", () => {
// elSearchInput.addEventListener("input", (event) => {
//   const searchText = event.target.value.toLowerCase();
//   let found = false;
//   elCardTitle.forEach((title) => {
//     const titleText = title.textContent.toLowerCase();
//     if (titleText.includes(searchText)) {
//       found = true;
//     }
//   });
//   if (found) {
//     elCards.classList.add("block");
//   } else {
//     elCards.classList.remove("block");
//   }
// });

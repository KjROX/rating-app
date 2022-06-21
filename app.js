const ratings = Array.from(document.querySelectorAll(".rating"));
const submitButton = document.querySelector(".pre-submit button");
const ratingSpanTag = document.querySelector(".your-rating span");
const postSubmitPage = document.querySelector(".post-submit");
const preSubmitPage = document.querySelector(".pre-submit");
let ratedByCustomer;
let checkIfRatedByCustomer = false;
function handleRatingClick() {
  checkIfRatedByCustomer = true;
  ratedByCustomer = this.getAttribute("value");
  ratings.forEach((rating) => {
    rating.classList.remove("rating-clicked");
  });
  this.classList.add("rating-clicked");
}
function handleSubmitButtonClick() {
  if (checkIfRatedByCustomer) {
    ratingSpanTag.textContent = ratedByCustomer;
    postSubmitPage.classList.remove("not-visible");
    preSubmitPage.classList.add("not-visible");
  } else {
    alert("Please rate before submitting");
  }
}

ratings.forEach((rating) => {
  rating.addEventListener("click", handleRatingClick);
});

submitButton.addEventListener("click", handleSubmitButtonClick);

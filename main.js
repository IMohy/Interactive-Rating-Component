let sub = document.querySelector("button");
let rating = document.querySelector(".container");
let rateNum = document.querySelectorAll("ul li");
let thankU = document.querySelector(".rate-done");
let span = document.querySelector("span");

rateNum.forEach(function (e) {
  e.onclick = function () {
    rateNum.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList = "active";
  };
});
sub.addEventListener("click", rate);
function rate() {
  let number = document.querySelector("li.active");
  rating.style.display = "none";
  thankU.style.display = "block";
  span.innerText = number.innerHTML;
}

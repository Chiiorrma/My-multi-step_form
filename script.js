const sides = document.querySelectorAll(".side");
const circleSteps = document.querySelectorAll(".step");
const formInputs = document.querySelectorAll(".step-1 form input");
const plans = document.querySelectorAll("select-plan");
const changer = document.querySelectorAll(".changer");
const addons = document.querySelectorAll(".total b");
const total = document.querySelectorAll(".box");
const pricePlan = document.querySelectorAll("plan-price");
let time;
let currentStep;
let currentCircle;
const obj = {
  plan: null,
  kind: null,
  price: null
};

sides.forEach(side) => {
  const btnNext = document.querySelector("btn-next");
  const btnPrev = document.querySelector("btn-prev");
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      document.querySelector(`.step-${currentStep}`).style.display = "none";
      currentStep--;
      document.querySelector(`.step-${currentStep}`).style.display = "flex";
      currentStep--;
      circleSteps{ currentCircle }.classList.remove("active");
    })
  }
}
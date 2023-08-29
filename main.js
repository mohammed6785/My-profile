let up = document.querySelector(".up");
onscroll = () => {scrollY >= 200 ? up.style.display = "flex" :  up.style.display = "none"};
up.onclick = function () {
  scroll ({
    top: 0,
    behavior: "smooth", 
  });
}


let left = document.querySelectorAll(".l");

const op = {
  threshold: 0,
}
const observer1 = new IntersectionObserver((e) => {
  e.forEach((e) => {
    e.target.classList.toggle("left", e.isIntersecting);
  });
}, op);
for (let i = 0; i < left.length; i++) {
  observer1.observe(left[i]);
};


let center = document.querySelectorAll(".c");
const observer2 = new IntersectionObserver((e) => {
  e.forEach((e) => {
    e.target.classList.toggle("center", e.isIntersecting);
  });
}, op);
for (let i = 0; i < center.length; i++) {
  observer2.observe(center[i]);
};

let right = document.querySelectorAll(".r");
const observer3 = new IntersectionObserver((e) => {
  e.forEach((e) => {
    e.target.classList.toggle("right", e.isIntersecting);
  });
}, op);
for (let i = 0; i < right.length; i++) {
  observer3.observe(right[i]);
};

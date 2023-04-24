const greet = document.querySelector(".greet");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const elements = [greet, name, desc];

const typeWriter = (element, delay) => {
  const text = element.textContent;
  element.textContent = "";
  let i = 0;
  const typing = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      element.classList.add("cursor");
      setTimeout(typing, 100);
    } else {
      if (element !== desc) {
        element.classList.remove("cursor");
      } else {
        element.classList.add("glitch-title");
        element.classList.add("layers");
      }
    }
  };
  setTimeout(typing, delay);
};

const animate = () => {
  typeWriter(greet, 200);
  typeWriter(name, 2400);
  typeWriter(desc, 4600);
};

const topbtn = document.querySelector("#top-button");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    topbtn.classList.add("show");
  } else {
    topbtn.classList.remove("show");
  }
});

topbtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.onload = animate;

// SVG PATH

const circle1 = document.querySelector("#circle");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");
let d1 = circle1.getAttribute("d");
let d2 = circle2.getAttribute("d");
let d3 = circle3.getAttribute("d");

if (window.innerWidth < 768) {
  circle1.setAttribute(
    "d",
    "M 920 920 m -320 0 a 320 320 0 1 0 640 0 a 320 320 0 1 0 -640 0"
  );
  circle2.setAttribute(
    "d",
    "M 920 920 m -400 0 a 400 400 0 1 0 800 0 a 400 400 0 1 0 -800 0"
  );
  circle3.setAttribute(
    "d",
    "M 920 920 m -480 0 a 480 480 0 1 0 960 0 a 480 480 0 1 0 -960 0"
  );
} else if (window.innerWidth < 1081) {
  circle1.setAttribute(
    "d",
    "M 920 920 m -320 0 a 320 320 0 1 0 640 0 a 320 320 0 1 0 -640 0"
  );
  circle2.setAttribute(
    "d",
    "M 920 920 m -420 0 a 420 420 0 1 0 840 0 a 420 420 0 1 0 -840 0"
  );
  circle3.setAttribute(
    "d",
    "M 920 920 m -520 0 a 520 520 0 1 0 1040 0 a 520 520 0 1 0 -1040 0"
  );
} else {
  circle1.setAttribute("d", d1);
  circle2.setAttribute("d", d2);
  circle3.setAttribute("d", d3);
}

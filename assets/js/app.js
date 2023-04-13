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

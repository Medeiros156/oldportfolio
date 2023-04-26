const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

// const nums = "0123456789";
// const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const asia =
//   "アァカサタナハシチニヒミリヰギジヂビピウゥクスツヌフテネヘメレヱゲゼデベペロヲゴゾドボポヴッン";

// const letters = asia + latin + nums;
const letters = "01";

const fontSize = 14;

let columns = 0;
let rainDrops = [];

// if (window.innerWidth < 1080) {
//   // Tablet
//   canvas.width = window.innerWidth - 10;
//   // canvas.height = document.body.clientHeight - 10;
//   canvas.height = document.documentElement.scrollHeight;
//   console.log("docdoc", document.documentElement.scrollHeight);
//   console.log("canvas", canvas.height);
// } else if (window.innerWidth < 768) {
//   // Mobile
//   canvas.width = window.innerWidth - 10;
//   canvas.height = document.body.clientHeight - 35;
//   console.log("doc", document.body.clientHeight);
//   console.log("canvas", canvas.height);
// } else {
//   // Desktop
//   canvas.height = document.body.clientHeight - 50;
//   canvas.width = window.innerWidth - 10;
//   console.log("doc", document.body.clientHeight);
//   console.log("canvas", canvas.height);
// }
const resizeCanvas = () => {
  if (window.innerWidth < 768) {
    canvas.width = window.innerWidth - 10;
    canvas.height = document.body.scrollHeight;
    console.log("docdoc1", document.body.scrollHeight);
    console.log("canvas1", canvas.height);
  } else if (window.innerWidth < 1080) {
    canvas.width = window.innerWidth - 10;
    canvas.height = document.body.scrollHeight - 20;
    console.log("docdoc2", document.body.scrollHeight);
    console.log("canvas2", canvas.height);
  } else {
    canvas.width = window.innerWidth - 10;
    canvas.height = document.body.scrollHeight - 50;
    console.log("docdoc3", document.body.scrollHeight);
    console.log("canvas3", canvas.height);
  }

  columns = canvas.width / fontSize;
  console.log(columns);
  rainDrops = [];
  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }
};

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  // console.log(canvas.height);
  // console.log(canvas.width);
  if (Math.random() > 0.5) {
    context.fillStyle = "#ff3366";
  } else {
    context.fillStyle = "#25724b";
  }
  // context.fillStyle = "linear-gradient(blue,red)";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

setInterval(draw, 50);

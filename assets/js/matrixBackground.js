const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

const nums = "0123456789";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const asia =
  "アァカサタナハシチニヒミリヰギジヂビピウゥクスツヌフテネヘメレヱゲゼデベペロヲゴゾドボポヴッン";

const letters = asia + latin + nums;

const fontSize = 14;

let columns = 0;
let rainDrops = [];

const resizeCanvas = () => {
  columns = canvas.width / fontSize;
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mobile devices

    canvas.width = window.innerWidth - 10;
    canvas.height = document.body.clientHeight - 250;
  } else {
    canvas.width = window.innerWidth - 10;
    canvas.height = document.body.clientHeight - 50;
    // Desktop devices
  }
  rainDrops = [];
  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }
};

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
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

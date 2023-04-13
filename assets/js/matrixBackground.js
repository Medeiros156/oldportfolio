const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight * 4.1;

const nums = "0123456789";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const asia =
  "アァカサタナハシチニヒミリヰギジヂビピウゥクスツヌフテネヘメレヱゲゼデベペロヲゴゾドボポヴッン";

const letters = asia + latin + nums;

const fontSize = 14;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";
  //   const font = `${fontSize}px 'Noto Emoji'`;
  //   context.font = font;
  for (let i = 0; i < rainDrops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 50);

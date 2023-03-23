function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector(`body button[data-start]`);
const stopButton = document.querySelector(`body button[data-stop]`);
const body = document.querySelector('body');
const colorChanger2 = () => {
  console.log(stopButton);
};

stopButton.disabled = true;

const colorChanger = () => {
  let backColor = getRandomHexColor();
  body.style.backgroundColor = backColor;
  startButton.disabled = true;
  stopButton.disabled = false;
};

startButton.addEventListener('click', () => {
  colorChanger();
  timeChanger = setInterval(() => {
    let backColor = getRandomHexColor();
    body.style.backgroundColor = backColor;
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timeChanger);
  startButton.disabled = false;
  stopButton.disabled = true;
});

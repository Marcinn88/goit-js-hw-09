// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const callendar = document.querySelector('#datetime-picker');
const dateText = document.querySelector(`.timer`);
const dateButton = document.querySelector(`[type="button"]`);
const dateTextBox = document.querySelectorAll('.field');
const dateTextBoxValue = document.querySelectorAll('.value');
const body = document.querySelector('body');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

dateButton.style.fontSize = `20px`;
dateButton.style.height = `30px`;
callendar.style.padding = `0`;
callendar.style.width = `300px`;
callendar.style.height = `50px`;

dateText.style.fontSize = `30px`;
dateText.style.display = `flex`;
dateText.style.gap = `30px`;

flatpickr('#datetime-picker', { options });

for (let i = 0; i < dateTextBox.length; i++) {
  dateTextBox[i].style.display = `flex`;
  dateTextBox[i].style.flexDirection = `column`;
  dateTextBox[i].style.textAlign = `center`;
}

for (let i = 0; i < dateTextBoxValue.length; i++) {
  dateTextBoxValue[i].style.fontSize = `75px`;
}

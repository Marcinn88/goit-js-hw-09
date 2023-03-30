import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const callendar = document.querySelector('#datetime-picker');
const dateText = document.querySelector(`.timer`);
const dateButton = document.querySelector(`[type="button"]`);
const dateTextBox = document.querySelectorAll('.field');
const dateTextBoxValue = document.querySelectorAll('.value');

const daysDis = document.querySelector('[data-days]');
const hoursDis = document.querySelector('[data-hours]');
const minDis = document.querySelector('[data-minutes]');
const secDis = document.querySelector('[data-seconds]');

dateButton.disabled = true;

function addLeadingZero(value) {
  const strValue = String(value);
  return strValue.padStart(2, '0');
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const todayDate = new Date();
    const callendarDate = new Date(callendar.value);
    const dateSum = callendarDate - todayDate;
    if (dateSum < 0) {
      alert('Podaj datę w przyszłości.');
      dateButton.disabled = true;
      return null;
    }
    dateButton.disabled = false;
    const timeArray = convertMs(dateSum);
    daysDis.innerHTML = addLeadingZero(timeArray.days);
    hoursDis.innerHTML = addLeadingZero(timeArray.hours);
    minDis.innerHTML = addLeadingZero(timeArray.minutes);
    secDis.innerHTML = addLeadingZero(timeArray.seconds);
    return dateSum;
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

dateButton.style.fontSize = `20px`;
dateButton.style.height = `40px`;
callendar.style.fontSize = `25px`;
callendar.style.textAlign = `center`;
callendar.style.width = `300px`;
callendar.style.height = `50px`;

dateText.style.fontSize = `30px`;
dateText.style.display = `flex`;
dateText.style.gap = `30px`;

flatpickr('#datetime-picker', options);

for (let i = 0; i < dateTextBox.length; i++) {
  dateTextBox[i].style.display = `flex`;
  dateTextBox[i].style.flexDirection = `column`;
  dateTextBox[i].style.textAlign = `center`;
}

for (let i = 0; i < dateTextBoxValue.length; i++) {
  dateTextBoxValue[i].style.fontSize = `75px`;
}

dateButton.addEventListener('click', countdown);

function countdown() {
  dateButton.disabled = true;
  let timeChanger = setInterval(() => {
    let todayDate = new Date();
    let callendarDate = new Date(callendar.value);
    let dateSum = callendarDate - todayDate;
    let timeArray = convertMs(dateSum);
    daysDis.innerHTML = addLeadingZero(timeArray.days);
    hoursDis.innerHTML = addLeadingZero(timeArray.hours);
    minDis.innerHTML = addLeadingZero(timeArray.minutes);
    secDis.innerHTML = addLeadingZero(timeArray.seconds);
    if (dateSum < 0) {
      clearInterval(timeChanger);
      alert('Timer end');
      daysDis.innerHTML = '00';
      hoursDis.innerHTML = '00';
      minDis.innerHTML = '00';
      secDis.innerHTML = '00';
    }
  }, 1000);
}

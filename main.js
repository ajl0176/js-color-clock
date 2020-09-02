const $clock = document.querySelector('.clock');
const $display = document.querySelector('.clock-display');
const $progressBar = document.querySelector('.clock-progress-bar');

let isHovering = false;

$clock.addEventListener('mouseover', function(){
  console.log(event.bubbles);
  isHovering = true;
});

$clock.addEventListener('mouseout', function(){
  isHovering = false;
});

function setTime(){
  const now = new Date();
  console.log (now);
  let hours, minutes, seconds;

const hexHours = ('0' + now.getHours().toString(16)).slice(-2);
const hexMinutes = ('0' + now.getMinutes().toString(16)).slice(-2);
const hexSeconds = ('0' + now.getSeconds().toString(16)).slice(-2);
console.log(`#${hexHours}${hexMinutes}$(hexSeconds)`);

if(isHovering) {
  hours = ('0' + now.getHours().toString(16)).slice(-2);
  minutes = ('0' + now.getMinutes().toString(16)).slice(-2);
  seconds = ('0' + now.getSeconds().toString(16)).slice(-2);
} else {
  hours = ('0' + now.getHours()).slice(-2);
  minutes = ('0' + now.getMinutes()).slice(-2);
  seconds = ('0' + now.getSeconds()).slice(-2);
}

  const currentTime = `${hours}:${minutes}:${seconds}`;
  $display.innerHTML = currentTime;

  $progressBar.style.width = `${seconds / 60 * 14}rem`;

  console.log(seconds/60);
}
setInterval(setTime, 1000);

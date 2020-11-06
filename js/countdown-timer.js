
const weddingDay = new Date(2020, 10,28,14).getTime();

let timer = setInterval(function() {
  const today = new Date().getTime();
  const diff = weddingDay - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer-days").innerHTML = days;
  document.getElementById("timer-hours").innerHTML = hours;
  document.getElementById("timer-minutes").innerHTML = minutes;
  document.getElementById("timer-seconds").innerHTML = seconds;
//     "<div class=\"days countdown z-depth-4\"> \
//   <div class=\"numbers\">" + days + "</div>days</div> \
// <div class=\"hours countdown z-depth-4\"> \
//   <div class=\"numbers\">" + hours + "</div>hours</div> \
// <div class=\"minutes countdown z-depth-4\"> \
//   <div class=\"numbers\">" + minutes + "</div>minutes</div> \
// <div class=\"seconds countdown z-depth-4\"> \
//   <div class=\"numbers\">" + seconds + "</div>seconds</div> \
// </div>";

}, 1000);
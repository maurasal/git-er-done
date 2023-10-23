// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $('#currentDay');
const hour9 = $('#hour-9');
const hour10 = $('#hour-10');
const hour11 = $('#hour-11');
const hour12 = $('#hour-12');
const hour13 = $('#hour-13');
const hour14 = $('#hour-14');
const hour15 = $('#hour-15');
const hour16 = $('#hour-16');
const hour17 = $('#hour-17');
const timeSlots = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
const currentDay = (dayjs().format('dddd'));
const currentTime = (dayjs().format('hh:mm'));
const currentHour = (dayjs().get('hour'));

$(function pastOrPresent() {
  if (currentHour < 9) {
    timeSlots[0].addClass('future')
    timeSlots[1].addClass('future')
    timeSlots[2].addClass('future')
    timeSlots[3].addClass('future')
    timeSlots[4].addClass('future')
    timeSlots[5].addClass('future')
    timeSlots[6].addClass('future')
    timeSlots[7].addClass('future')
    timeSlots[8].addClass('future')
  } else if (currentHour === 9) {
    timeSlots[0].addClass('present')
    timeSlots[1].addClass('future')
    timeSlots[2].addClass('future')
    timeSlots[3].addClass('future')
    timeSlots[4].addClass('future')
    timeSlots[5].addClass('future')
    timeSlots[6].addClass('future')
    timeSlots[7].addClass('future')
    timeSlots[8].addClass('future')
  } else if (currentHour === 10) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('present')
    timeSlots[2].addClass('future')
    timeSlots[3].addClass('future')
    timeSlots[4].addClass('future')
    timeSlots[5].addClass('future')
    timeSlots[6].addClass('future')
    timeSlots[7].addClass('future')
    timeSlots[8].addClass('future')
  } else if (currentHour === 11) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('past')
    timeSlots[2].addClass('present')
    timeSlots[3].addClass('future')
    timeSlots[4].addClass('future')
    timeSlots[5].addClass('future')
    timeSlots[6].addClass('future')
    timeSlots[7].addClass('future')
    timeSlots[8].addClass('future')
  } else if (currentHour === 12) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('past')
    timeSlots[2].addClass('past')
    timeSlots[3].addClass('present')
    timeSlots[4].addClass('future')
    timeSlots[5].addClass('future')
    timeSlots[6].addClass('future')
    timeSlots[7].addClass('future')
    timeSlots[8].addClass('future')
  } else if (currentHour === 13) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('past')
    timeSlots[2].addClass('past')
    timeSlots[3].addClass('past')
    timeSlots[4].addClass('present')
    timeSlots[5].addClass('future')
    timeSlots[6].addClass('future')
    timeSlots[7].addClass('future')
    timeSlots[8].addClass('future')
  } else if (currentHour === 14) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('past')
    timeSlots[2].addClass('past')
    timeSlots[3].addClass('past')
    timeSlots[4].addClass('past')
    timeSlots[5].addClass('present')
    timeSlots[6].addClass('future')
    timeSlots[7].addClass('future')
    timeSlots[8].addClass('future')
  } else if (currentHour === 15) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('past')
    timeSlots[2].addClass('past')
    timeSlots[3].addClass('past')
    timeSlots[4].addClass('past')
    timeSlots[5].addClass('past')
    timeSlots[6].addClass('present')
    timeSlots[7].addClass('future')
    timeSlots[8].addClass('future')
    timeSlots[0,1,2,3,4,5].addClass('past')
  } else if (currentHour === 16) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('past')
    timeSlots[2].addClass('past')
    timeSlots[3].addClass('past')
    timeSlots[4].addClass('past')
    timeSlots[5].addClass('past')
    timeSlots[6].addClass('past')
    timeSlots[7].addClass('present')
    timeSlots[8].addClass('future')
  } else if (currentHour === 17) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('past')
    timeSlots[2].addClass('past')
    timeSlots[3].addClass('past')
    timeSlots[4].addClass('past')
    timeSlots[5].addClass('past')
    timeSlots[6].addClass('past')
    timeSlots[7].addClass('past')
    timeSlots[8].addClass('present')
  } else if (currentHour > 17) {
    timeSlots[0].addClass('past')
    timeSlots[1].addClass('past')
    timeSlots[2].addClass('past')
    timeSlots[3].addClass('past')
    timeSlots[4].addClass('past')
    timeSlots[5].addClass('past')
    timeSlots[6].addClass('past')
    timeSlots[7].addClass('past')
    timeSlots[8].addClass('past')
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

currentDayEl.text(currentDay);
console.log(currentTime);
console.log(currentDay);
console.log(currentHour);



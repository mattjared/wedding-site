'use strict';

var rsvpField = document.getElementsByName('attending_wedding');
var attendingFields = document.querySelector('.attending-form');
var notAttendingFields = document.querySelector('.not-attending-form');

console.log('Stop reading my code. Email me w/ bugs, ya jabroni!');
function showCorrectFields() {
  if (event.target.value === 'Yes') {
    attendingFields.classList.add('show');
    if (notAttendingFields != null) {
      notAttendingFields.classList.remove('show');
    }
  } else if (event.target.value === 'No') {
    notAttendingFields.classList.add('show');
    if (attendingFields != null) {
      attendingFields.classList.remove('show');
    }
  }
}

for (var i = 0; i < rsvpField.length; i += 1) {
  rsvpField[i].addEventListener("change", showCorrectFields);
}
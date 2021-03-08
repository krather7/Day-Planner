//Setting up global variables
var button = $('.saveBtn')
//=========================================================
//Runs the function when the page is "ready". #currentDay will display the date in HTML
$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');

  $('#currentDay').text(date);
//=========================================================
//Stores current date and time in a variable
  function currentTime() {
    var current = moment().hours()
    var time = $('.time-block');
//=========================================================
    time.each(function () {
//Rounds the time down to the nearest hour (9-17)
      var hour = parseInt($(this).attr('id'))
//=========================================================
//Colors the boxes based on the current time, past time, or future time
      if (hour === current) {
        $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
      } else if (current > hour) {
        $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
      } else {
        $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
      }
    })
  }
  //=========================================================
  //Runs function created above
  currentTime()
  //=========================================================
  //Event listener that stores new values into local storage
  button.on('click', function (event) {
        event.preventDefault();
    var userText = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var storeThis = $(this).parent().attr('id');
        localStorage.setItem(storeThis, JSON.stringify(userText));
  })

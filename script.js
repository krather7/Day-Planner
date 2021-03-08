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
  //Event listener that stores new values into local storage as a string
  button.on('click', function (event) {
        event.preventDefault();
    var userText = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var storeThis = $(this).parent().attr('id');
        localStorage.setItem(storeThis, JSON.stringify(userText));
  })
  //=========================================================
  //Prints user's text and removes default empty quotations.
  $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
  $('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
  $('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
  $('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
  $('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
  $('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
  $('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
  $('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
  $('#17 textarea').val(localStorage.getItem('17').replace(/['"]+/g, ''));
});
  //=========================================================
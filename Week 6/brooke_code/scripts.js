//Javascript File - Week 6 Homework

/*RUBRIC INSTRUCTIONS:
Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the `````` menu by using a ```for``` loop in JavaScript (don't update the HTML to do this!) |                                |                        |                          |
When the user changes the input of the drop-down, update the background image based on what they selected                                                                                              |                                |                        |                          |
Use $.append() in your iteration on the drop-down menu                                                                                                                                                 |                                |                        |                          |
Use the ```$.attr()``` function to update html classes                                                                                                                                                 |                                |                        |                          |
Get the value of user input using ```$.val()```                                                                                                                                                        |                                |                        |                          |
Use the ```$.change``` event handler to capture user actions                                                                                                                                           |                                |                        |                          |
Use ```if/else if/else ``` conditionals to control the flow of your application                                                                                                                        |                                |                        |                          |
Display your pseudocode as Javascript comments */

$(document).ready(function() {
	console.log( 'ready!');

//This is where I am creating an array to store the values: "NYC", "SF", "LA", "ATX", "SYD";
  	var city = ["NYC", "SF", "LA", "ATX", "SYD"];

/* When the user clicks on the button, toggle between hiding and showing the dropdown menu */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#submit-btn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$("city").click(function(){
    $("img").attr("");
});


$(".nyc").attr("img" ,"background-image" , "url(images/nyc.jpg");


$("city").click(function(){
    $("img").attr("");
});


//Explanation of "for" loop from W3 (https://www.w3schools.com/js/js_loop_for.asp): 
	// Syntax: 
	// for (statement 1; statement 2; statement 3) {
	//     code block to be executed
	// }

// Statement 1 is executed before the loop (the code block) starts.
// Statement 2 defines the condition for running the loop (the code block).
// Statement 3 is executed each time after the loop (the code block) has been executed.

// Example:
// for (i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
// }

//Explanation of the "why" loop from W3 (https://www.w3schools.com/js/js_loop_while.asp):
	// Syntax:
	// while (condition) {
	//     code block to be executed
	// }
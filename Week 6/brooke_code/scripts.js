// JavaScript File

$(document).ready(function() {

var cityArr = ["NYC" , "SF" , "LA" , "ATX" , "SYD"];

$.each(cityArr, function(index, value) {

	$('select').append('<option>' + value + '</option>')
});
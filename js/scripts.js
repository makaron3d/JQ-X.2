var span = $("span");
    span.each(function(index, element) {
});

span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});

//$("span:even").css('color', 'red');

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + "Index to: " + index + '">Click me</button>'
$(element).append(button)
});
    
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});

$(function(){
  
  $("body").append("<div><h1>Nic!</h1><p>Jakaś treść!</p></div>")
  
  var firstItem = $('div').find('h1')
 
  console.log(firstItem.text());
  
  firstItem.css("color", "blue")
});

$(function() {
    var p = $('div').find('p').last().css('color', 'green');
});
$(function() {
	console.log('DOM loaded - you can have fun');
});

//var paragraphs = $("h1").css("color", "red");

//console.log(paragraphs[0]);

//console.log(paragraphs.eq(0));



$(function(){
    var paragraphsy = $('h1').css('color', 'red');
    var rawFirstHeader = paragraphsy[2];
    console.log(rawFirstHeader);
    var jqFirstHeader = paragraphsy.eq(1);
    console.log(jqFirstHeader);
    jqFirstHeader.css('color', 'blue');
    var jqSecondHeader = paragraphsy.eq(0);
    console.log(jqSecondHeader);
    jqSecondHeader.css('color', 'green');
});


$(function(){
  var p = $( '<p></p>' ),
      pWithText = $( '<p>Hi!</p>' ),
      pWithClass = $( '<p class="greeting">Hi!</p>' ); 
  console.log(p);
  console.log(pWithText);
  console.log(pWithClass);
  
  $("div").append(pWithText);
  $("div").append(pWithClass);
  
});

$('p').each(function( index, elem ) {
$( elem ).text('paragraph ' + index);
});

$(function(){
  $('p').each(function( index, elem ) {
    $( elem ).text('paragraph ' + index);
  }).css('color', 'red');
});

$(function(){
    var paragraphs = $('p').css('color', 'orange');
    var rawFirstParagraph = paragraphs[0];
    console.log(rawFirstParagraph);
    var jqFirstParagraph = paragraphs.eq(1)
    console.log(jqFirstParagraph);
    jqFirstParagraph.css('color', 'green');
});
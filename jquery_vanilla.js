//capture that the document is ready
$(document ).ready(function() {
    console.log( "ready!" );
});
//capture that the item has been clicked
$( "#target" ).click(function() {
    alert( "The target has been clicked." );
});
//hover
$("#navbar").hover(function(){
    $(this).css("background-color", "#232b2b");
});
//keypressing 
$('#searchbox').bind('keypress', function(e) {
   alert(e.key + ' WAS PRESSED');

});
//mouse location
$(document).bind('mousemove',function(e) {
    console.clear();
    mousex = e.pageX;
    mousey = e.pageY;
    console.log(mousex,mousey)
})

//capture an event when it happens in the document Events+ . We use click event as an example
$(document).on("click", function(){
    console.log("Hello World!")
});
//or in this way for any events on any element in the document
function getAllEvents(element) {
    var result = [];
    for (var key in element) {
        if (key.indexOf('on') === 0) {
            result.push(key.slice(2));
        }
    }
    return result.join(' ');
}
var el = $(document);
el.bind(getAllEvents(el[0]), function(e) {
    console.log(e);
});

//hide certain item
$("#Hideitem").click(function() {
    $("#imagehide").hide( "slow", function() {
        alert( "Animation complete." );
    });
});
//show certain item
$("#ShowItem").click(function() {
    $("#imageshow").show( "slow", function() {
        alert( "Animation complete." );
    });
});
//hide certain item with fadeout
$("#Hideitem1").click(function() {
    $("#imagehide").fadeOut( "slow", function() {
        alert( "Animation complete." );
    });
});
//show certain item with fadein
$("#ShowItem1").click(function() {
    $("#imageshow").fadeIn( "slow", function() {
        alert( "Animation complete." );
    });
});
//iterate across items and add styles
$("#listitems li" ).click(function(){
    $("#listitems li" ).each(function(index) {
        if (index==0){
            $(this).css("color","blue");
        }else if(index==1){
            $(this).css("color","green");
        }else{
            $(this).css("color","red");
        }
        
      });
});
//obtaining parent element
$( "li" ).parent().css( "background-color", "white" );
//obtaining children element
$( "ul #listitems" ).children().css( "background-color", "#FDFDF0" );
//all elements of a certain class
$( ".itemshows" ).css( "border", "1px solid gray" );
//get item by id
$( "#Hideitem" ).css( "border", "1px solid blue" );
//show hidden elements
var hiddenElements = $( "body" ).find( ":hidden" ).not( "script" );
$( "span" ).first().text( "Found " + hiddenElements.length + " hidden elements total." );
$( "div:hidden" ).show( 3000 );
$( "span" ).last().text( "Found " + $( "input:hidden" ).length + " hidden inputs." );
//get options selected attributed
$( "select" ).change(function() {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "#textspace" ).text( str );
  })
  .trigger( "change" );//to fire manually
//change href of an a element
$("a[href='https://platform.assemblerschool.com/']").attr("href", "http://www.google.com/");
//create a text inside dom elements
$( ".textspace" ).append( "<p>Test</p>" );
//value of an input variable
$( "#inputtest" )
  .keyup(function() {
    var value = $( this ).val();
    alert(value);
  }).keyup();
//remove element of a selector
$( "div" ).remove( ".scifi" );
//animate after two seconds in jquery
$(document).ready(function(){
    setTimeout(function(){ $("#finalimage").fadeOut(); }, 2000);
});

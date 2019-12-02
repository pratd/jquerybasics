//using the equivalent javascript for the jquery functions from jquery_vanilla

//capture the document is ready
if (document.addEventListener) document.addEventListener('DOMContentLoaded',function(){
    console.log( "ready!" );
});
//capture that the item has been clicked
var elementIsClicked = false; // declare the variable that tracks the state
function clickHandler(){ // declare a function that updates the state
  alert("An element has been clicked")
}

var element = document.getElementById('target'); 
element.addEventListener('click', clickHandler);
//capture hover
var elementIsHovered= false; 
function hoverHandler(){ 
    document.getElementById("navbar").style.color = "#232b2b";
}

var element = document.getElementById('navbar'); 
element.addEventListener('mouseover', hoverHandler);
//keypressing event javascript
document.getElementById('searchbox').addEventListener("keypress",function(event) {
    event.preventDefault();
    alert(event.key +', was pressed');
});
//mouselocation
document.addEventListener('mousemove', function (evt) {
    console.clear();
    mousex = evt.pageX;
    mousey = evt.pageY;
    console.log(mousex,mousey);
});
//capture an event when it occurs in the document
var eventName,prefix;

for (var key in document) {
    prefix = key.substr(0, 2);
    
    if (prefix === "on") {
        eventName = key.substr(2);        
        document.addEventListener(eventName, function (eventName) {
            console.clear;
            console.log(eventName);
        }, true);
    }
}
//hide a certain item
function hidethatItem(){
    document.getElementById('imagehide').style.visibility='hidden';
}
var element = document.getElementById('Hideitem');
element.addEventListener('click',hidethatItem);
//show a certain item
function showthatItem(){
    document.getElementById('imageshow').style.display='block';
}
var element = document.getElementById('ShowItem');
element.addEventListener('click',showthatItem);
//hide item with fadeout
function FadeoutItem(){
    el = document.getElementById('imagehide');
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
          setTimeout(function(){
            el.style.display = "none";
          },2000);
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
element = document.getElementById('Hideitem');
element.addEventListener('click', FadeoutItem);
//show element with fadein
function FadeInItem(el, display){
    el = document.getElementById('imageshow');
    el.style.opacity = 10;
    el.style.display = display || "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
          setTimeout(function(){
            el.style.opacity = val;
            requestAnimationFrame(fade);
          }, 2000);
      }
    })();
  }
element = document.getElementById('ShowItem');
element.addEventListener('click', FadeInItem);
//iterate across items and add style
let listbox = document.querySelectorAll('#listitems li');
listbox.forEach(function(element,index) {
    if (index==0){
        listbox[index].style.color='blue';
    }else if(index==1){
        listbox[index].style.color='green';
    }else{
        listbox[index].style.color='red';
    }
});
//obtaining parent element in javascript
document.querySelector("li").parentElement.style.backgroundColor='blue';
//obtaining children element
document.querySelector('#listitems').style.color='yellow';
//get all elements of a certain class
var element = document.getElementsByClassName('itemshows');
console.log(element);
//chanage href
document.getElementById('assembler').setAttribute("onclick","location='http://www.google.com/'");
//create a text inside dom elements
$( ".textspace" ).append( "<p>Test</p>" );
var h= document.getElementsByClassName('textspace')[0];
h.appendChild(document.createTextNode('p'));
//value of an input variable
document.getElementById("inputtest").addEventListener('change', doThing);
/* funntion */
function doThing(){
   alert('Horray! Someone wrote "' + this.value + '"!');
}
//remove element of a selector
document.getElementsByTagName('div')[0].remove('scifi')
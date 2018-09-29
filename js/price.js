// JavaScript Document
for (i=0; i<document.getElementsByClassName('oglavl').length; i++){
document.getElementsByClassName('oglavl').item(i).onclick =  rewind;
}
function rewind(e){
  e.preventDefault();
  var elem = e.target;
  var number=0;
  for (i=0; i<document.getElementsByClassName(elem.className).length; i++){
	  if (document.getElementsByClassName(elem.className).item(i) == elem) {number=i; n = number+1}
  }
  var fixedHeader = 0; if ( document.documentElement.clientWidth < 730) {fixedHeader = 5.5*14; }
  $('html, body').animate({ scrollTop: document.getElementsByClassName('section1').item(n).offsetTop + fixedHeader }, 500);	
}


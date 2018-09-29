if((document.getElementsByClassName('slickParagraph').item(0)!=null)){$('.slickParagraph').slick({arrows:true,dots:false,infinite:false,adaptiveHeight:true,speed:200,responsive:[{breakpoint:5930,settings:{slidesToShow:1,slidesToScroll:1,}},]});}
if((document.getElementsByClassName('slickDop').item(0)!=null)){$('.slickDop').slick({arrows:false,dots:true,infinite:false,adaptiveHeight:true,speed:200,responsive:[{breakpoint:5930,settings:{slidesToShow:3,slidesToScroll:1,}},{breakpoint:930,settings:{slidesToShow:1,slidesToScroll:1,}}]});}
for(i=0;i<document.getElementsByClassName('oglavl').length;i++){document.getElementsByClassName('oglavl').item(i).onclick=rewind;}
function rewind(e){e.preventDefault();var elem=e.target;if(elem.nodeName=='SPAN'){elem=elem.parentNode}
var number=0;for(i=0;i<document.getElementsByClassName(elem.className).length;i++){if(document.getElementsByClassName(elem.className).item(i)==elem){number=i;}}
switch(number){case 0:n=2;break;case 1:n=12;break;case 2:n=11;break;case 3:n=3;break;case 4:n=6;break;case 5:n=7;break;case 6:n=8;break;case 7:n=5;break;case 8:n=14;break;case 9:n=4;break;case 10:n=9;break;case 11:n=10;break;case 12:n=13;break;}
var fixedHeader=0;if(document.documentElement.clientWidth<730){fixedHeader=5.5*14;}
$('html, body').animate({scrollTop:document.getElementsByClassName('section1').item(n).offsetTop+fixedHeader},500);}
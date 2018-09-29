if((document.getElementsByClassName('slider-nav').item(0)!=null)){$('.slider-nav').slick({dots:false,infinite:false,arrows:false,adaptiveHeight:true,asNavFor:'.slider-for',speed:200,focusOnSelect:true,swipeToSlide:true,responsive:[{breakpoint:5920,settings:{slidesToShow:3,slidesToScroll:1,arrows:true,}},{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:930,settings:{slidesToShow:1,slidesToScroll:1,arrows:true,}}]});}
if((document.getElementsByClassName('slider-for').item(0)!=null)){$('.slider-for').slick({dots:false,infinite:false,arrows:false,adaptiveHeight:true,asNavFor:'.slider-nav',speed:200,responsive:[{breakpoint:5920,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:930,settings:{slidesToShow:1,slidesToScroll:1,}}]});}
if((document.getElementsByClassName('slickParagraph').item(0)!=null)){$('.slickParagraph').slick({arrows:false,dots:true,infinite:false,adaptiveHeight:true,speed:200,responsive:[{breakpoint:5930,settings:'unslick'},{breakpoint:930,settings:{slidesToShow:1,slidesToScroll:1,}}]});}
if(document.documentElement.clientWidth>=930){document.getElementsByClassName('divMiniPriceItem').item(0).style.paddingBottom='3px';document.getElementsByClassName('divMiniPriceItem').item(0).style.background='rgb(0, 104, 176)';$('.slider-for').on('beforeChange',function(event,slick,currentSlide,nextSlide){itemClick.call(document.getElementsByClassName('divMiniPriceItem').item(nextSlide),nextSlide);});$('.slider-nav').on('beforeChange',function(event,slick,currentSlide,nextSlide){itemClick.call(document.getElementsByClassName('divMiniPriceItem').item(nextSlide),nextSlide);});}
function itemClick(slide){for(n=0;n<document.getElementsByClassName('divMiniPriceItem').length;n++){if(n!=slide){document.getElementsByClassName('divMiniPriceItem').item(n).style.paddingBottom='0px';document.getElementsByClassName('divMiniPriceItem').item(n).style.background='none';}}
this.style.paddingBottom='3px';this.style.background='rgb(0, 104, 176)';}
var h30=[184,208,232,256,280,304,328,352,376,400,414,478,502,526]
var h40=[208,232,257,280,305,329,353,378,402,426,450,525,549,573]
var h50=[232,257,280,305,329,364,388,413,437,462,486,561,585,610]
var h60=[256,280,305,330,365,389,414,439,474,498,523,607,633,657]
var h70=[280,305,329,365,389,415,449,475,499,535,559,654,679,704]
var h80=[304,329,364,389,415,450,475,500,535,561,595,691,726,752]
var h90=[328,353,388,414,449,475,510,535,571,596,622,737,762,798]
var h100=[352,378,413,439,475,500,535,575,597,633,658,784,810,845]
var h110=[376,402,437,474,499,535,571,597,633,659,694,821,856,892]
var h120=[400,426,462,498,535,561,596,633,659,695,731,867,903,939]
var h130=[414,450,486,523,559,595,622,658,694,731,767,913,950,977]
var h140=[478,525,561,607,654,691,737,784,821,867,913,950,987,1023]
var h150=[502,549,585,633,679,726,762,810,856,903,950,987,1034,1070]
var h160=[526,573,610,657,704,752,798,845,892,939,977,1023,1070,1117]
var h170=[550,597,644,692,739,776,823,870,918,966,1013,1060,1107,1155]
var h180=[574,622,669,716,764,811,859,907,954,1001,1049,1096,1144,1192]
var h190=[598,645,693,742,789,837,884,942,989,1037,1086,1133,1181,1228]
var h200=[622,670,718,766,814,872,919,968,1016,1074,1122,1169,1217,1265]
var h210=[636,694,742,791,849,897,945,1003,1052,1100,1158,1206,1254,1312]
var h220=[660,719,767,825,874,922,980,1029,1087,1135,1184,1243,1291,1350]
var ramka=[h30,h40,h50,h60,h70,h80,h90,h100,h110,h120,h130,h140,h150,h160,h170,h180,h190,h200,h210,h220]
for(i=0;i<document.querySelectorAll('input[type=radio]').length;i++){document.querySelectorAll('input[type=radio]').item(i).onclick=calcChange;document.querySelectorAll('input[type=radio]').item(i).checked=false;}
for(i=0;i<document.querySelectorAll('input[type=checkbox]').length;i++){document.querySelectorAll('input[type=checkbox]').item(i).onclick=calcChange;document.querySelectorAll('input[type=checkbox]').item(i).checked=false;}
for(i=0;i<document.querySelectorAll('input[type=number]').length;i++){document.querySelectorAll('input[type=number]').item(i).onkeyup=calcChange;}
document.querySelectorAll('input[type=radio]').item(0).click();function calcChange(e){try{yaCounter28386751.reachGoal('calcMS');}catch(err){}
var tip=perebor2('sType');var width=document.getElementById('mWidth');var height=document.getElementById('mHeight');var ral=0;var enforce=0;if(document.getElementById('mCB1').checked){ral=650;}
if(document.getElementById('mCB2').checked){enforce=300;}
var answerDiv=document.getElementById('mSum');if(tip==1){var x=Math.ceil(height.value/10)-3;var y=Math.ceil(width.value/10)-3;if((x>=0)&&(y>=0)){if(ramka[x][y]!=null){tip=ramka[x][y]+ral+enforce;}}
document.querySelectorAll('.mPicTrack').item(0).style.left='0';}
else if(tip==2){if((width.value>=30)&&(width.value<=110)&&(height.value>=30)&&(height.value<=220)){var p=Number(width.value)*2+Number(height.value)*2;if((p<=600)&&(p>=200)){tip=1800+ral;}else if((p>600)&&(p<=640)){tip=2000+ral;}}
document.querySelectorAll('.mPicTrack').item(0).style.left='-108%';}
var text=tip+' Р';if((text!=undefined)&&(tip>2)){answerDiv.innerHTML=text;}
else{answerDiv.innerHTML="&#x270d;";}}
function perebor2(elem){var theElem=document.getElementsByName(elem);for(i=0;i<document.getElementsByName(elem).length;i++){if(theElem.item(i).checked){return Number(theElem.item(i).value);break;}}}
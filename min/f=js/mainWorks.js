var minMenuNavOpen=0;var minMenuCatOpen=0;var docHeight;var rem=14;var i,s;var now=new Date();var submitPressed=false;var first_time=0;var audio=document.getElementById('audio');var ref=document.referrer;var page=document.URL;var popup_interval=0;var onloadTime;window.onpageshow=function(e){if(e.persisted){window.location.reload();}};$(document).ready(function(){var sidebar=document.querySelectorAll('.sidebar').item(0);var sidebarClose=document.querySelectorAll('input#sidebarClose').item(0);if(sidebarClose){sidebarClose.checked=false;sidebarClose.onchange=function(){if(sidebarClose.checked===false){sidebar.style.display='table-cell';}
else{sidebar.style.display='none';}};}
for(i=0;i<document.querySelectorAll('.footerItem').length;i++){document.querySelectorAll('.footerItem').item(i).classList.add('scale50');}
onloadTime=new Date().getTime();if((localStorage.getItem('fvisit')==null)||(localStorage.getItem('fvisit')=='')){localStorage.setItem('fvisit',onloadTime);}
document.getElementsByClassName('minMenuNav').item(0).onclick=function(){if(document.getElementsByClassName('divNav').item(0).style.display=='block'){document.getElementsByClassName('divNav').item(0).style.display='none';document.getElementsByClassName('minMenuNav').item(0).style.backgroundColor='#ff7e00';document.getElementsByClassName('minMenuNav').item(0).style.color='#fff';minMenuNavOpen=0;}
else{document.getElementsByClassName('divNav').item(0).style.display='block';document.getElementsByClassName('minMenuNav').item(0).style.backgroundColor='#fff';document.getElementsByClassName('minMenuNav').item(0).style.color='#ff7e00';document.getElementsByClassName('minMenuNav').item(0).style.borderColor='#fff';minMenuNavOpen=1;}};document.getElementsByClassName('minMenuCat').item(0).onclick=function(){if((document.documentElement.clientWidth<730)&&(document.getElementsByClassName('menu').item(0).style.position!='absolute')){}
if(document.getElementsByClassName('menu').item(0).style.display=='block'){document.getElementsByClassName('menu').item(0).style.display='none';document.getElementsByClassName('minMenuCat').item(0).style.backgroundColor='#ff7e00';document.getElementsByClassName('minMenuCat').item(0).style.color='#fff';document.getElementsByClassName('minMenuCat').item(0).style.borderLeftColor='#fff';minMenuCatOpen=0;}
else{document.getElementsByClassName('menu').item(0).style.display='block';document.getElementsByClassName('minMenuCat').item(0).style.backgroundColor='#fff';document.getElementsByClassName('minMenuCat').item(0).style.color='#ff7e00';document.getElementsByClassName('minMenuCat').item(0).style.borderColor='#fff';document.getElementsByClassName('minMenuCat').item(0).style.borderLeftColor='#ff7e00';minMenuCatOpen=1;}};for(i=0;i<document.getElementsByClassName('button8').length;i++){document.getElementsByClassName('button8').item(i).label=i;document.getElementsByClassName('button8').item(i).onclick=button8Click;}
for(i=0;i<document.getElementsByClassName('callBack').length;i++){document.getElementsByClassName('callBack').item(i).label=i;document.getElementsByClassName('callBack').item(i).onclick=button8Click;}
window.onresize=function(){redraw();};window.onorientationchange=function(event){redraw();};window.onscroll=onscrollFunc;for(i=0;i<document.getElementsByClassName('divReviewsItem').length;i++){document.getElementsByClassName('divReviewsItem').item(i).onclick=reviewsClick;}
for(i=0;i<document.querySelectorAll('.hideCB').length;i++){document.querySelectorAll('.hideCB').item(i).onchange=onscrollFunc;}
redraw();document.querySelectorAll('.divNav').item(0).style.backgroundSize='70%';});window.addEventListener('load',function(e){adjustSections();onloadTime=new Date().getTime();$('.divReviews').slick({dots:true,infinite:false,speed:300,arrows:false,adaptiveHeight:true,responsive:[{breakpoint:5920,settings:{slidesToShow:3,slidesToScroll:1,infinite:true,}},{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1,}},{breakpoint:730,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:'35px',centerMode:true,arrows:false}}]});$('.divReviews').slick('slickGoTo',1);if((now.getHours()>0)&&(now.getHours()<=23)){var init_interval=0;var obnov_interval=0;popup_interval=setInterval(popup_consult,22000);if($.cookie('lastsession')===null){localStorage.clear();}
if(localStorage.getItem('bottom')===null){localStorage.setItem('bottom','0px');}
if(localStorage.getItem('right')===null){localStorage.setItem('right','0px');}
if(localStorage.getItem('consult_window')===null){localStorage.setItem('consult_window','hidden');}
if(localStorage.getItem('s_status')==null){localStorage.setItem('s_status','1');}
try{if(('localStorage'in window)&&(window['localStorage']!=null)){yaCounter28386751.reachGoal('localStorage');}
else{yaCounter28386751.reachGoal('NoStorage');}}
catch(e){console.log(e);}
$("#consult_window").css('bottom',localStorage.getItem('bottom'));$("#consult_window").css('right',localStorage.getItem('right'));setTimeout(function(){init_cons();$.ajax({type:'post',url:'//sdelaemokna.ru//chat/php/init_cons.php',success:function(data){var res=data.split(' | ');if(res[1]===0){localStorage.removeItem('obnovlenie');init_interval=setInterval(init_cons,6000);}
else if(res[1]==1){obnovlenie();obnov_interval=setInterval(obnovlenie,6000);}}});},8000);$("#call_consult").bind('vclick',function(event){event.stopImmediatePropagation();event.preventDefault();$("#consult_window").css('visibility','visible');localStorage.setItem('consult_window','visible');$("#message").focus();if($("#div_messages").css('display')=='block'){obnovlenie();}});$("#exit").bind('vclick',function(event){event.stopImmediatePropagation();event.preventDefault();$("#consult_window").css('visibility','hidden');localStorage.setItem('consult_window','hidden');localStorage.setItem('window','closed');});$("#message").bind('keydown',function(event){if(event.keyCode==13){$("#submit").click();event.stopImmediatePropagation();event.preventDefault();}});document.querySelectorAll('#message').item(0).oninput=function(){var inp=document.querySelectorAll('#message').item(0);var string=inp.value.replace(/[^А-Яа-яA-Za-z\d\s,.!?:%$#@*""''()-_=+<>]/gi,'');inp.value=string;}
$("#submit").click(function(){var message=$("#message").val();message=message.replace(/[^А-Яа-яA-Za-z\d\s,.!?:%$#@*""''()-_=+<>]/gi,' ');if((message!=='')&&(localStorage.getItem('s_status')==1)){if(message.length>1000){message.substr(0,1000);}
var username=$("#username").val();var user_email=$("#email").val();var user_tel=$("#tel").val();submitPressed=true;if($("#contacts").css('display')=='block'){if($("#tel").val()!==''){user_tel='Телефон: '+$("#tel").val();}
if($("#email").val()!==''){user_email='E-mail: '+$("#email").val();}
if($("#username").val()!==''){username='Имя: '+$("#username").val();}}
clearInterval(init_interval);clearInterval(obnov_interval);$("#message").val('');$.ajax({type:'post',url:'/chat/php/chat.php',data:{message:message,username:username,user_tel:user_tel,user_email:user_email,ref:document.referrer},success:function(data){if($("#contacts").css('display')=='block'){$("#contacts").remove();$("#consult_window").css('height','auto');}
if($("#consult_window").height()<300){$("#consult_window").css('height','auto');}
$("#div_messages").css('display','block');$("#div_messages").html(data);if((localStorage.getItem('admin_status')==0)&&($("#sendNotify").css('display')!='block')){$("<div id='sendNotify'><div style='display:block; position:absolute; z-index:2;  margin:3px 0 0 13px; border: solid 1px #CCC;  background-color:white; opacity:0.7; height: 244px; width: 249px;'></div><img style='position:absolute; z-index:3; opacity:1; margin:80px 0 0 110px; width:50px; height: 50px;' src='images/waiting.gif' /><div style='position:absolute; width:230px; margin:135px 0 0 22px; color:#000; text-align:center; z-index:3; background-color:#fff; opacity:1;'>Уведомление оператору отправлено.<br> Мы ответим на Ваш вопрос в течение 2-3 минут.</div></div>").insertBefore("#div_messages");}
$("#div_messages")[0].scrollTop=$("#div_messages")[0].scrollHeight;},complete:function(){obnov_interval=setInterval(obnovlenie,8000);localStorage.setItem('obnovlenie','1');}});}});}
document.querySelectorAll('.divNav').item(0).style.backgroundSize='100%';});function redraw(){if(window.innerHeight<=document.documentElement.clientHeight){docHeight=document.documentElement.clientHeight;}
else{docHeight=window.innerHeight;}
var docWidth=document.documentElement.clientWidth;var menuDefault=docWidth*0.2;var menuWidth=docWidth*0.2;var headerHeight=document.getElementsByTagName('header').item(0).clientHeight;var picHeight=46;var menuItemHeight=Number(Number((docHeight-headerHeight)/8)-2);var fixedWidth=1200;if(document.getElementsByClassName('divNav').item(0).style.display=='none'){document.getElementsByClassName('divNav').item(0).style.display='block';}
if(document.getElementsByClassName('menu').item(0).style.display=='none'){document.getElementsByClassName('menu').item(0).style.display='block';}
document.getElementsByClassName('menu').item(0).style.top=headerHeight+'px';if(document.documentElement.clientWidth>1200){if(document.getElementsByClassName('slickWrapper').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper').length;s++){document.getElementsByClassName('slickWrapper').item(s).style.width=(fixedWidth-200)*0.995+'px';if(document.getElementsByClassName('slickWrapper').item(s).getAttribute('scale')!=null){var scale=parseInt(document.getElementsByClassName('slickWrapper').item(s).getAttribute('scale'))/100;document.getElementsByClassName('slickWrapper').item(s).style.width=(fixedWidth-200)*scale+'px';}}}
if(document.getElementsByClassName('slickWrapper97').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper97').length;s++){document.getElementsByClassName('slickWrapper97').item(s).style.width=(fixedWidth-200)*0.97+'px';}}
if(document.getElementsByClassName('slickWrapper95').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper95').length;s++){document.getElementsByClassName('slickWrapper95').item(s).style.width=(fixedWidth-200)*0.95+'px';}}
if(document.getElementsByClassName('slickWrapper85').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper85').length;s++){document.getElementsByClassName('slickWrapper85').item(s).style.width=(fixedWidth-200)*0.85+'px';}}
if(menuItemHeight<45){menuItemHeight=45;}
for(i=0;i<8;i++){document.getElementsByClassName('menuItem').item(i).style.borderRight='none';document.getElementsByClassName('menuItem').item(i).style.paddingTop=Number(Number(menuItemHeight-picHeight)/2)+'px';document.getElementsByClassName('menuItem').item(i).style.paddingBottom=Number(Number(menuItemHeight-picHeight)/2)+'px';}}
else if((document.documentElement.clientWidth>730)&&(document.documentElement.clientWidth<=1200)){if((menuDefault>=200)){menuWidth=200;}else{menuWidth=menuDefault;}
if(document.getElementsByClassName('slickWrapper').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper').length;s++){document.getElementsByClassName('slickWrapper').item(s).style.width=(document.documentElement.clientWidth-menuWidth)*0.995+'px';if(document.getElementsByClassName('slickWrapper').item(s).getAttribute('scale')!=null){var scale=parseInt(document.getElementsByClassName('slickWrapper').item(s).getAttribute('scale'))/100;document.getElementsByClassName('slickWrapper').item(s).style.width=(document.documentElement.clientWidth-menuWidth)*scale+'px';}}}
if(document.getElementsByClassName('slickWrapper97').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper97').length;s++){document.getElementsByClassName('slickWrapper97').item(s).style.width=(document.documentElement.clientWidth-menuWidth)*0.97+'px';}}
if(document.getElementsByClassName('slickWrapper95').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper95').length;s++){document.getElementsByClassName('slickWrapper95').item(s).style.width=(document.documentElement.clientWidth-menuWidth)*0.95+'px';}}
if(document.getElementsByClassName('slickWrapper85').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper85').length;s++){document.getElementsByClassName('slickWrapper85').item(s).style.width=(document.documentElement.clientWidth-menuWidth)*0.85+'px';}}
document.getElementsByClassName('sidebar').item(0).style.width=menuWidth-3+'px';document.getElementsByClassName('menu').item(0).style.width=menuWidth+'px';var text1Height=document.getElementsByClassName('menuItem').item(0).childNodes.item(1).clientHeight;picHeight=(document.getElementsByClassName('menuItem').item(0).childNodes.item(0).clientHeight==0)?38:document.getElementsByClassName('menuItem').item(0).childNodes.item(0).clientHeight;var textWidth=(document.getElementsByClassName('menuItem').item(0).childNodes.item(1).clientWidth==0)?142:document.getElementsByClassName('menuItem').item(0).childNodes.item(1).clientWidth;var picWidth=picHeight;var picAboveText=(Number(menuWidth-6)<Number(picWidth+textWidth));var picDntFit=(Number(menuItemHeight-4)<Number(picHeight+text1Height));for(i=0;i<8;i++){var textHeight=document.getElementsByClassName('menuItem').item(i).childNodes.item(1).clientHeight;var maxHeight;if(picHeight>=textHeight){maxHeight=picHeight;}
else{maxHeight=textHeight;}
if(picAboveText){if(picDntFit){document.getElementsByClassName('menuItem').item(i).childNodes.item(0).style.display='none';maxHeight=textHeight;}
else{document.getElementsByClassName('menuItem').item(i).childNodes.item(0).style.display='inline-block';maxHeight=Number(picHeight+textHeight);}}
else{document.getElementsByClassName('menuItem').item(i).childNodes.item(0).style.display='inline-block';}
document.getElementsByClassName('menuItem').item(i).style.paddingTop=Number(Number(menuItemHeight-maxHeight)/2)+'px';document.getElementsByClassName('menuItem').item(i).style.paddingBottom=Number(Number(menuItemHeight-maxHeight)/2)+'px';}}
else if(document.documentElement.clientWidth<=730){document.getElementsByClassName('menu').item(0).style='';for(i=0;i<8;i++){document.getElementsByClassName('menuItem').item(i).style='';document.getElementsByClassName('menuItem').item(i).childNodes.item(0).style='';}
if(minMenuNavOpen==0){document.getElementsByClassName('divNav').item(0).style.display='none';}
if(minMenuCatOpen==0){document.getElementsByClassName('menu').item(0).style.display='none';}
document.getElementsByClassName('content').item(0).style.margin='0 auto';if(document.getElementsByClassName('slickWrapper').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper').length;s++){document.getElementsByClassName('slickWrapper').item(s).style.width=document.documentElement.clientWidth*0.995+'px';if(document.getElementsByClassName('slickWrapper').item(s).getAttribute('scale')!=null){var scale=parseInt(document.getElementsByClassName('slickWrapper').item(s).getAttribute('scale'))/100;document.getElementsByClassName('slickWrapper').item(s).style.width=document.documentElement.clientWidth*scale+'px';}}}
if(document.getElementsByClassName('slickWrapper97').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper97').length;s++){document.getElementsByClassName('slickWrapper97').item(s).style.width=document.documentElement.clientWidth*0.995+'px';}}
if(document.getElementsByClassName('slickWrapper95').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper95').length;s++){document.getElementsByClassName('slickWrapper95').item(s).style.width=document.documentElement.clientWidth*0.95+'px';}}
if(document.getElementsByClassName('slickWrapper85').item(0)!=null){for(s=0;s<document.getElementsByClassName('slickWrapper85').length;s++){document.getElementsByClassName('slickWrapper85').item(s).style.width=document.documentElement.clientWidth*0.85+'px';}}}}
function button8Click(){yaCounter28386751.reachGoal('button8click');var buttonText=this.innerHTML;var buttonId=this.id;console.log(buttonId);if(!buttonText){buttonText='Вызвать мастера';}
if(this.classList.contains('prompt')){buttonText='Перезвонить Вам?';}
var div1=document.createElement('div');div1.className='arcWrapper';div1.id="divWrapper";document.getElementsByTagName('footer').item(0).insertBefore(div1,null);var div2=document.createElement('div');div2.className='box-modal';div2.id='modalWindow';document.getElementsByClassName('arcWrapper').item(0).insertBefore(div2,null);var div3=document.createElement('div');div3.className='box-modal_close arcticmodal-close';div3.innerHTML="закрыть&#10060;";div3.id="divClose";document.getElementById('modalWindow').insertBefore(div3,null);var div4=document.createElement('div');div4.id="div4";document.getElementById('modalWindow').insertBefore(div4,null);var div5=document.createElement('div');div5.innerHTML=buttonText;div5.className='arcCaption';div5.id="div5";div4.insertBefore(div5,null);var div6=document.createElement('div');div6.innerHTML='Оставьте контактный телефон, мастер свяжется с Вами!';if(buttonId=='bDownload'){div6.innerHTML='Оставьте e-mail для отправки рекомендаций!';}
div6.className='arcPrompt';div6.id="div6";document.getElementById('modalWindow').insertBefore(div6,null);var div7=document.createElement('div');div7.innerHTML='<img src="images/zDownArrow.png" />';div7.className='arcArrow';div7.id="div7";document.getElementById('modalWindow').insertBefore(div7,null);var div8=document.createElement('div');div8.className='arcInputDiv';document.getElementById('modalWindow').insertBefore(div8,null);var inp9=document.createElement('input');inp9.type='tel';inp9.className='arcInput';inp9.setAttribute('placeholder','Ваш телефон');if(buttonId=='bDownload'){inp9.setAttribute('placeholder','e-mail');}
inp9.id="inp9";inp9.setAttribute('autofocus','autofocus');div8.insertBefore(inp9,null);if(buttonId!='bDownload'){$("#inp9").mask("+7(999) 999-99-99");}
var div10=document.createElement('div');div10.className='arcSendDiv';document.getElementById('modalWindow').insertBefore(div10,null);var inp11=document.createElement('input');inp11.type='button';inp11.className='button8';inp11.id='sendMyMessage';inp11.value='Отправить';div10.insertBefore(inp11,null);$('#modalWindow').arcticmodal({afterClose:function(){div1.remove();},afterOpen:function(){inp11.onclick=function(){var tel=inp9.value;var button=buttonText;var fvisit=localStorage.getItem('fvisit');var clickTime=new Date().getTime();var dataArray={tel:tel,button:button,width:screen.width,height:screen.height,clientW:document.documentElement.clientWidth,clientH:document.documentElement.clientHeight,time:Number(clickTime-onloadTime),bId:buttonId,fvisit:fvisit};if(buttonId=='msCalcOrder'){var price=document.querySelectorAll('#mSum').item(0).innerHTML;var size=document.querySelectorAll('#mWidth').item(0).value+' x '+document.querySelectorAll('#mHeight').item(0).value;dataArray={tel:tel,button:button,width:screen.width,height:screen.height,clientW:document.documentElement.clientWidth,clientH:document.documentElement.clientHeight,time:Number(clickTime-onloadTime),price:price,size:size};}
if(buttonId=='bDownload'){var producer=perebor('regAdvice');dataArray={tel:tel,button:button,width:screen.width,height:screen.height,clientW:document.documentElement.clientWidth,clientH:document.documentElement.clientHeight,time:Number(clickTime-onloadTime),producer:producer};}
if(inp9.value!==''){$.ajax({url:'//sdelaemokna.ru/phpfiles/sendCallback.php',type:'POST',data:dataArray,success:function(data){div4.style.display='none';div6.innerHTML='Сообщение успешно отправлено!';div7.style.display='none';div8.style.display='none';div10.style.display='none';yaCounter28386751.reachGoal('sendMessage');}});}};}});}
function adjustSections(){if(document.documentElement.clientWidth<730){return;}
if(window.innerHeight<=document.documentElement.clientHeight){docHeight=document.documentElement.clientHeight;}
else{docHeight=window.innerHeight;}
var section1TopFix=11*14;var section1Top=section1TopFix;var section1=Number(docHeight-section1Top);for(i=0;i<document.getElementsByClassName('section1').length;i++){var sectionBefore=document.getElementsByClassName('section1').item(i).clientHeight;if((i==0)&&(!document.getElementsByClassName('section1').item(i).classList.contains('nopadding'))){if(sectionBefore<=section1){var padTop=Math.abs(Number((section1-sectionBefore)/2-rem));var padBot=Math.abs(Number((section1-sectionBefore)/2+rem));if(document.documentElement.clientWidth<=730){padTop=Math.abs(Number(docHeight-8*14-sectionBefore)/2+rem);padBot=Math.abs(Number(docHeight-8*14-sectionBefore)/2+rem);}
document.getElementsByClassName('section1').item(i).style.paddingTop=padTop+'px';document.getElementsByClassName('section1').item(i).style.paddingBottom=padBot+'px';}}
else{var section2=Number(docHeight-112);if(document.documentElement.clientWidth<=730){section2=Number(docHeight);}
if((sectionBefore<section2)&&(document.getElementsByClassName('section1').item(i).classList.contains('padding'))){document.getElementsByClassName('section1').item(i).style.paddingTop=Number((section2-sectionBefore)/2+rem)+'px';document.getElementsByClassName('section1').item(i).style.paddingBottom=Number((section2-sectionBefore)/2+rem)+'px';}}}}
function onscrollFunc(){var scrolled=window.pageYOffset||document.documentElement.scrollTop;var docWidth=document.documentElement.clientWidth;var menuWidth=document.getElementsByClassName('menu').item(0).clientWidth;var headerHeight=document.getElementsByTagName('header').item(0).clientHeight;if(window.innerHeight<=document.documentElement.clientHeight){docHeight=document.documentElement.clientHeight;}
else{docHeight=window.innerHeight;}
var topBorder=scrolled+headerHeight;var bottomTriggerZone=10*rem;var bottomBorder=scrolled+docHeight;if(docWidth<=730){topBorder=scrolled;bottomTriggerZone=4*rem;}
var forEach=Array.prototype.forEach;forEach.call(document.querySelectorAll('.section1'),function(child){var childTop=child.offsetTop+headerHeight;var childBottom=childTop+child.offsetHeight;var childTopOnScreen=(((topBorder)<childTop)&&(childTop<(bottomBorder-bottomTriggerZone)));var childBottomOnScreen=((topBorder<childBottom)&&(childBottom<bottomBorder));if(childTop>0){if((childTopOnScreen)||(childBottomOnScreen)||(childTop<topBorder)){}
else if((childTop-bottomTriggerZone)>bottomBorder){}}});forEach.call(document.querySelectorAll('.footerTItem'),function(child){var childTop=child.offsetTop;if(childTop>0){if(bottomBorder>(childTop+bottomTriggerZone)){child.style.transform='scale(1, 1)';child.style.webkitTransform='scale(1, 1)';child.style.opacity=1;}
else if((childTop-bottomTriggerZone)>bottomBorder){child.style.transform='scale(0.5, 0.5)';child.style.webkitTransform='scale(0.5, 0.5)';child.style.opacity=0;}}});if((scrolled>Number(headerHeight))){if(document.getElementsByClassName('divScrollToTop').length==0){var divScrollArrow=document.createElement('div');divScrollArrow.className='divScrollToTop';divScrollArrow.innerHTML='наверх';document.getElementsByClassName('content').item(0).appendChild(divScrollArrow);if(docWidth>Number(1260+divScrollArrow.clientWidth)){divScrollArrow.style.left='14px';divScrollArrow.style.bottom="5px";}
else{divScrollArrow.style.left=Number((document.documentElement.clientWidth-divScrollArrow.clientWidth+menuWidth)/2)+'px';}
divScrollArrow.onclick=function(){$('html, body').animate({scrollTop:0},500);};}}
else{$('.divScrollToTop').remove();}
if(docWidth>730){redraw();}}
function reviewsClick(){var img=document.createElement('img');img.id='reviewModalImg';var index=this.querySelectorAll('.divReviewsPic > img').item(0).src.indexOf('/resize');img.src=this.querySelectorAll('.divReviewsPic > img').item(0).src.slice(0,index)+this.querySelectorAll('.divReviewsPic > img').item(0).src.slice(index+7);document.querySelectorAll('#reviewModalDiv').item(0).insertBefore(img,null);document.getElementById('reviewModalImg').style.height=document.documentElement.clientHeight*0.85+'px';$("#modal2").arcticmodal({afterClose:function(){document.querySelectorAll('#reviewModalDiv').item(0).removeChild(img);}});}
function init_cons(){var consult_window_position=$("#consult_window").css('bottom');$.ajax({type:'post',url:'/chat/php/init_cons.php',data:{ref:ref,page:page,closed:localStorage.getItem('window')},success:function(data){var res=data.split(' | ');localStorage.setItem('admin_status',res[0]);if(res[0]==1){$("#call_consult").css("background-image","url(/images/oper_online.gif)");if($("#contacts").css('display')=='block'){$("#contacts").remove();console.log('remove contacts');$("#consult_window").css('height','auto');console.log('consult_window_position - '+consult_window_position);document.getElementById('consult_window').style.bottom=consult_window_position;console.log('после присвоения - '+$("#consult_window").css('bottom'));}}
else if((res[0]==0)){$("#call_consult").css("background-image","url(/images/oper_offline.gif)");}
if(res[1]==1){$("#div_messages").css('display','block');$("#div_invite").html('Здравствуйте!<br>Если есть какие-нибудь вопросы - задавайте!');}
else if((res[1]==0)&&(res[0]==1)){$("#div_messages").css('display','none');$("#div_invite").html('Здравствуйте!<br> Будем рады ответить на Ваши вопросы - задавайте!');}
else if((res[1]==0)&&(res[0]==0)&&(!submitPressed)){$("#div_messages").css('display','none');$("#div_invite").html('Здравствуйте!<br>Оставьте Ваше сообщение и контакты, мы обязательно ответим!');if($("#contacts").css('display')!='block'){$("#div_messages").after("<div id='contacts' style='display:block; width:278px; overflow:hidden; '><input type='text' id='username' placeholder='Ваше имя' /><input type='email' id='email' placeholder='Адрес электронной почты' /><input id='tel' type='tel' id='tel' placeholder='Телефон' /></div>");console.log('create contacts'+consult_window_position);$("#tel").mask("+7(999) 999-99-99");$("#consult_window").css('height','auto');document.getElementById('consult_window').style.bottom=consult_window_position;console.log('после присвоения - '+document.getElementById('consult_window').style.bottom);}}},complete:function(){if(first_time==0){$("#consult_window").css('visibility',localStorage.getItem('consult_window'));first_time=1;}}});}
function obnovlenie(){var writing_length=0;if($("#writing").css('display')=='block'){writing_length=55;console.log('not destroyed');}
var chat=$('#div_messages').html();if(chat.substr(0,4)=='<img'){chat='';}
var chatlen=chat.length-writing_length;console.log('длина чата - '+chatlen);$.ajax({type:'post',url:'/chat/php/obnovl.php',data:{chat_len:chatlen},success:function(data){var res=data.split(' | ');if(res[0].indexOf('message1')>=0){$("#sendNotify").remove();if(chatlen!=0){audio.play();if(localStorage.getItem('consult_window')=='hidden'){$("#call_consult").trigger('vclick');}}
if($("#writing").css('display')=='block'){$("#writing").remove();console.log('удалили сообщение что оператор пишет');}}
$("#div_messages").html(chat+res[0]);localStorage.setItem('admin_status',res[1]);if(res[1]==1){$("#call_consult").css("background-image","url(/images/oper_online.gif)");}
else if(res[1]==0){$("#call_consult").css("background-image","url(/images/oper_offline.gif)");}
if(res[2]==1){$("#div_messages").css('display','block');}
else if(res[2]==0){$("#div_messages").css('display','none');}
if((res[3]==1)&&($("#writing").css('display')!='block')){console.log('make element, chatlen before-'+$('#div_messages').html().length);$("#div_messages").append('<div id="writing"> оператор набирает сообщение...</div>');console.log('element appended, chatlen after-'+$('#div_messages').html().length);$("#div_messages").scrollTop($("#div_messages")[0].scrollHeight);}
else if(res[3]==0){if($("#writing").css('display')=='block'){$("#writing").remove();console.log('destroy element2');}}
if(res[4]==0){localStorage.setItem('s_status','0');}
else if(res[4]==1){localStorage.setItem('s_status','1');}
if(res[4]==''){localStorage.setItem('s_status','1');}
if(res[0]!=''){$("#div_messages")[0].scrollTop=$("#div_messages")[0].scrollHeight;}}});}
function popup_consult(){if((localStorage.getItem('consult_window')=='hidden')&&(localStorage.getItem('window')!='closed')){$("#call_consult").trigger('vclick');localStorage.setItem('consult_window','hidden');}
clearInterval(popup_interval);}
function perebor(elem){var theElem=document.getElementsByName(elem);for(i=0;i<document.getElementsByName(elem).length;i++){if(theElem.item(i).checked){return theElem.item(i).value;break;}}}
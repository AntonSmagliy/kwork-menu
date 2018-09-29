
if ((document.getElementsByClassName('slickParagraph').item(0) != null)){
	
$('.slickParagraph').slick({
  arrows: true,
  dots: false,
  infinite: false,
  adaptiveHeight: true,
  speed: 200,
  
  responsive: [
	  {
	  breakpoint: 5930,
	  settings: {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  }
	  },

  ]  
}); //slick
}
if ((document.getElementsByClassName('miniPriceDetails').item(0) != null)){
	
$('.ruchki').slick({
	dots: true,
	infinite: false,
	arrows: true,
	adaptiveHeight: true,
	
  responsive: [
        {
      breakpoint: 5920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },

      {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:false,
		centerMode: true,
		centerPadding: '20px',
      }
    }
  ]  
}); //slick
$('.ruchki').slick('slickGoTo',1);
}

	
$('.zamki').slick({
	dots: true,
	infinite: false,
	arrows: true,
	adaptiveHeight: true,
	
  responsive: [
        {
      breakpoint: 5920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },

      {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
		centerMode: true,
		centerPadding: '45px',
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:false,
		centerMode: true,
		centerPadding: '20px',
      }
    }
  ]  
}); //slick
$('.zamki').slick('slickGoTo',2);









//function doPic(imgName) {
//
//if ((imgName == '1')||(imgName == '2')||(imgName == '3')) { 
//document.getElementById('mainpic').src = '/images/ruchki'+imgName+'.jpg';
//}
//if ((imgName == '4')||(imgName == '5')||(imgName == '6')) { 
//document.getElementById('mainpicZ').src = '/images/zamki'+imgName+'.jpg';
//}
//
//}
//
//function showModal() {
//
//$("#modal1").arcticmodal();
//
//}
//
//
//function zSendModalOrder(){
//var name = document.getElementById('zSendName').value;
//var tel = document.getElementById('zSendTel').value;
//var quant = document.getElementById('zInp0').value +" | "+document.getElementById('zInp1').value +" | "+document.getElementById('zInp2').value +" | "+document.getElementById('zInp3').value;
//
//  if (tel != '') {
//	  $.ajax ({ 
//		  type: 'post',
//		  url: 'http://sdelaemokna.ru/sendorder/zSendOrder.php',
//		  data: { 
//		  name:name, tel:tel, quant:quant 
//		  },
//		  success: function(data) {
//			  $("#modal1").arcticmodal('close');
//			  $("#modal2").arcticmodal();
//			  setTimeout(function() {$("#modal2").arcticmodal('close');}, 5000);
//			  }
//	  });
//  }
//}
//for (var i=0; i<4; i++){
//	document.getElementsByClassName('zMinus').item(i).onclick = zClick;
//	document.getElementsByClassName('zPlus').item(i).onclick = zClick;
//	document.getElementsByClassName('zQuantInput').item(i).value = '0';
//
//}
//
//function zClick(){
//var action = this.id.substr(1,1);
//var num = this.id.substr(-1,1);
//var input = document.getElementById('zInp'+num);
//if (action == 'M') {
//	if (Number(input.value) >= 1) {input.value = Number(input.value) -1;}
//}
//else if (action == 'P'){
//	if (Number(input.value) >= 0) {input.value = Number(input.value) +1;}
//}
//  switch (num){
//  case  ('0'):
//  	if (input.value != '0') {document.getElementById('zInstall'+num).innerHTML = '<span style="color:#f00; font-weight:700;">'+Number(500+Number(input.value)*739)+'</span> рублей';} else {document.getElementById('zInstall'+num).innerHTML= '';}
//  break;
//  case  ('1'):
//  	if (input.value != '0') {document.getElementById('zInstall'+num).innerHTML = '<span style="color:#f00; font-weight:700;">'+Number(500+Number(input.value)*850)+'</span> рублей';} else {document.getElementById('zInstall'+num).innerHTML= '';}
//  break;
//  case  ('2'):
//  	if (input.value != '0') {document.getElementById('zInstall'+num).innerHTML = '<span style="color:#f00; font-weight:700;">'+Number(500+Number(input.value)*1150)+'</span> рублей';} else {document.getElementById('zInstall'+num).innerHTML= '';}
//  break;
//  case  ('3'):
//  	if (input.value != '0') {document.getElementById('zInstall'+num).innerHTML = '<span style="color:#f00; font-weight:700;">'+Number(500+Number(input.value)*1450)+'</span> рублей';} else {document.getElementById('zInstall'+num).innerHTML= '';}
//  break;
//  }
//}// zClick
//
//$('#divScroll').animate({ scrollLeft: 220 }, 500);
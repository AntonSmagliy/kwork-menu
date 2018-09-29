// JavaScript Document Contacts
$(document).ready(function(){
	
$(".soInput > input[type=tel] ").mask("+7(999) 999-99-99");
document.getElementById('staticYMap').style.display = 'none';
document.getElementById('divYMap').style.height = '300px';

});
var docWidth = document.documentElement.clientWidth;

var files = document.querySelectorAll('#inputFile').item(0).files ;
var lbl = document.querySelectorAll("mark").item(0);
var wrapper = $( ".file_upload" ),
	inp = wrapper.find( "input" ),
	btn = wrapper.find( "span" );
        
btn.focus(function(){inp.focus()});
	
var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

function renderImage(file) {
  var reader = new FileReader();
  reader.onload = function (event) {
	theUrl = event.target.result;
	document.getElementById('answer').innerHTML += '<img src="' + theUrl + '" alt="">';
  } 
  reader.readAsDataURL(file);
}

inp.change(function(){
	var file_name = '';
	var filesCount = inp[ 0 ].files.length;
	document.getElementById('answer').innerHTML ='';

	
	if( file_api && inp[ 0 ].files[ 0 ] )
		for (i=0; i<filesCount; i++){
		file_name += inp[ 0 ].files[ i ].name + '; ';
		renderImage(inp[0].files[i]);
		}
	else
		file_name = inp.val().replace( "C:\\fakepath\\", '' ) ;

	if( ! file_name.length )
		return;


		lbl.innerHTML = ( file_name +" ("+ filesCount + " ��.)" );
		btn.text( "������� ����" );
	
}).change();
	
	



document.querySelectorAll('#inputFile').item(0).onchange = function(){
	
	files = this.files;
	console.log(files);
};

$('#sendMessage').click(function( event ){
	event.stopPropagation(); // ��������� �������������
	event.preventDefault();  // ������ ��������� �������������
	
	var data = new FormData();
	var message = document.querySelectorAll('#rpArea').item(0).value;
	var tel = document.querySelectorAll('#rpTel').item(0).value;
	var mail = document.querySelectorAll('#rpMail').item(0).value;
	
	data.append( 'message', message );
	data.append( 'tel', tel );
	data.append( 'mail', mail);
	
	if (files.length != 0){
		$.each( files, function( key, value ){
		  data.append( key, value );
		});
		
		$.ajax({
			url: '../phpfiles/sendPhoto.php?uploadfiles',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false, // �� ������������ ����� (Don't process the files)
			contentType: false, // ��� jQuery ������ ������� ��� ��� ��������� ������
			success: function( respond, textStatus, jqXHR ){
	
				// ���� ��� ��
	
				if( typeof respond.error === 'undefined' ){
					// ����� ������� ���������, ������ ��� ������ �����
	
					// ������� ���� � ����������� ������ � ���� '.ajax-respond'
	
//					var files_path = respond.files;
//					var html ='';
//					$.each( files_path, function( key, val ){ 
//					html += '<img class="imgContent" src="//sdelaemokna.ru/reviews/uploads/'+ val + '"/>' ;;
//					})
//					
					$('#answer').html( '' );
					document.querySelectorAll('.reviewPrompt + mark').item(0).innerHTML = '';
					document.querySelectorAll('.file_upload input[type=file]').item(0).value ='';	
					var loaded = document .createElement('div');
					loaded.className = 'loadedDiv';
					loaded.innerHTML = '������� �� ���������!';
					document.getElementById('answer').appendChild(loaded);
					
				}
				else{
					console.log('������ ������ �������: ' + respond.error );
				}
			},
			error: function( jqXHR, textStatus, errorThrown ){
				console.log('������ AJAX �������: ' + textStatus );
			}
		});
	} //end if
});

document.querySelectorAll('#sendRequest').item(0).onclick = function (event) {
	//event.stopPropagation(); // ��������� �������������
	//event.preventDefault();  // ������ ��������� �������������
	
	var data = new FormData();
		
	var message = document.querySelectorAll('#reqDesc').item(0).value;
	var tel = document.querySelectorAll('#reqTel').item(0).value;
	var name = document.querySelectorAll('#reqName').item(0).value;
	var adress = document.querySelectorAll('#reqAdress').item(0).value;
	
	if (message != '') { data.append( 'message', message );}
	if (tel != '') {data.append( 'tel', tel );}
	if (name != '') {data.append( 'name', name);}
	if (adress != '') {data.append( 'adress', adress);}
	
	if (tel != ''){

		$.ajax({
			url: '../phpfiles/sendRequest.php',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false, // �� ������������ ����� (Don't process the files)
			contentType: false, // ��� jQuery ������ ������� ��� ��� ��������� ������
			success: function( respond, textStatus, jqXHR ){
	
				// ���� ��� ��
	
				if( typeof respond.error === 'undefined' ){
					// ����� ������� ���������, ������ ��� ������ �����
	
					// ������� ���� � ����������� ������ � ���� '.ajax-respond'
	
//					var files_path = respond.files;
//					var html ='';
//					$.each( files_path, function( key, val ){ 
//					html += '<img class="imgContent" src="//sdelaemokna.ru/reviews/uploads/'+ val + '"/>' ;;
//					})
//					
					$('#answer2').html( '' );
					var loaded = document .createElement('div');
					loaded.className = 'loadedDiv';
					loaded.innerHTML = '������� �� ���������!';
					document.getElementById('answer2').appendChild(loaded);
					
				}
				else{
					console.log('������ ������ �������: ' + respond.error );
					$('#answer2').html( '' );
					var loaded = document .createElement('div');
					loaded.className = 'loadedDiv';
					loaded.innerHTML = '������ ������ �������: ' + respond.error;
					document.getElementById('answer2').appendChild(loaded);

				}
			},
			error: function( jqXHR, textStatus, errorThrown ){
				console.log('������ AJAX �������: ' + textStatus );
					$('#answer2').html( '' );
					var loaded = document .createElement('div');
					loaded.className = 'loadedDiv';
					loaded.innerHTML = '������ AJAX �������: ' + textStatus;
					document.getElementById('answer2').appendChild(loaded);

			}
		});
	} //end if
	
};

window.addEventListener('load', function(){
	ymaps.ready(init);
	docWidth = document.documentElement.clientWidth;
});
window.addEventListener('resize', function(){
	if ( document.documentElement.clientWidth != docWidth) {
	  document.getElementById('divYMap').innerHTML='';
	  ymaps.ready(init);
	  docWidth = document.documentElement.clientWidth;
	}
});
window.addEventListener('onorientationchange', function(event){
	if ( document.documentElement.clientWidth != docWidth) {
	  document.getElementById('divYMap').innerHTML='';
	  ymaps.ready(init);
	  docWidth = document.documentElement.clientWidth;
	}
});

function init(){
		
	myMap = new ymaps.Map("divYMap", {
        center: [59.896472, 30.373078],
        zoom: 14,
		type: 'yandex#map',
		behaviors: ['scrollZoom', 'multiTouch'],
		controls:[]
    });	
	var zoomControl = new ymaps.control.ZoomControl({
	  options: {
		  size: "small",
	  }
	});
	myMap.controls.add(zoomControl);
	
var placemark = new ymaps.Placemark([59.896472, 30.373078], {
    balloonContent: '����� ������:',
    iconContent: ""
}, {
    preset: 'islands#darkBlueStretchyIcon',
    // ��������� ������ �������� ������.
    balloonCloseButton: false,
    // ����� ����� ��������� � ��������� ������ �� ������ �����.
    hideIconOnBalloonOpen: false
});
myMap.geoObjects.add(placemark);

	
}

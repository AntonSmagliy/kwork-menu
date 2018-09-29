// JavaScript Document

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

	
	if( file_api && inp[ 0 ].files[ 0 ] ){
		for (i=0; i<filesCount; i++){
		file_name += inp[ 0 ].files[ i ].name + '; ';
		renderImage(inp[0].files[i]);
		}}
	else{
		file_name = inp.val().replace( "C:\\fakepath\\", '' ) ;}

	if( ! file_name.length ){
		document.querySelectorAll('.reviewPrompt > div:nth-child(3)').item(0).style.background = 'darkgrey';
		document.querySelectorAll('#sendReview').item(0).classList.remove('button11');
		return;
		
	}

		lbl.innerHTML = ( file_name +" ("+ filesCount + " шт.)" );
		btn.text( "Выбрать фото" );
		document.querySelectorAll('.reviewPrompt > div:nth-child(3)').item(0).style.background = 'rgba(0, 116, 193, 1)';
		document.querySelectorAll('#sendReview').item(0).classList.add('button11');
	
}).change();
	
	



document.querySelectorAll('#inputFile').item(0).onchange = function(){
	
	files = this.files;
};

$('#sendReview').click(function( event ){
	event.stopPropagation(); // Остановка происходящего
	event.preventDefault();  // Полная остановка происходящего
	
	var data = new FormData();
	
	if (files.length != 0){
		$.each( files, function( key, value ){
		  data.append( key, value );
		});

		$.ajax({
			url: '../phpfiles/sendReview.php?uploadfiles',
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false, // Не обрабатываем файлы (Don't process the files)
			contentType: false, // Так jQuery скажет серверу что это строковой запрос
			success: function( respond, textStatus, jqXHR ){
	
				// Если все ОК
	
				if( typeof respond.error === 'undefined' ){
					// Файлы успешно загружены, делаем что нибудь здесь
	
					// выведем пути к загруженным файлам в блок '.ajax-respond'
	
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
					loaded.innerHTML = 'Спасибо за обращение!';
					document.querySelectorAll('.reviewPrompt > div:nth-child(4)').item(0).style.background = 'rgb(255, 140, 0)';
					document.getElementById('answer').appendChild(loaded);
					
				}
				else{
					console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error );
				}
			},
			error: function( jqXHR, textStatus, errorThrown ){
				console.log('ОШИБКИ AJAX запроса: ' + textStatus );
			}
		});
	} //end if
});
$(document).ready(function(){
	$('.total').text($('#participant-data .card').length);
	$('#search-input').bind('keyup', function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
		}
		var searchTerm = $(this).val();
		var searchResultNo = 0;
		var cardCount = $('#participant-data .card').length;
		if(searchTerm.length > 0){
			$('#participant-data .card').each(function(index){
				if(!$(this).text().match(new RegExp(searchTerm, "i"))){
					$(this).parent().hide();
				}else{
					$(this).parent().show();
					searchResultNo++;
				}

				if(index == cardCount-1 && searchResultNo == 0){
					$('#noresult').show();
				}else{
					$('#noresult').hide();
				}
				if(searchResultNo > 0){
					$('#noresult').hide();
				}
			});
		}else{
			$('#participant-data .card').parent().show();
			$('#noresult').hide();
		}
	});

	$('#search-input').on('search', function () {
		$('#participant-data .card').parent().show();
	});
});
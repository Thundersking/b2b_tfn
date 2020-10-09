$(document).ready(function(){ 
	//formstyller
	$('.js-paddibg-select').styler({		
		onSelectOpened: function() {
			if($('.dropdown').length){
				var botPadding = $('.jq-selectbox__dropdown ul').height();
				$('#js-padding-container').css('padding', '0 0 ' + botPadding + 'px');
			} else{
				var topPadding = $('.jq-selectbox__dropdown ul').height();
				$('#js-padding-container').css('padding', topPadding + 'px 0 0');
			}
		},
		onSelectClosed: function() {
			$('#js-padding-container').css('padding', '');
		}
	});
	$('select').styler();
	
	//news slider
    $('#js-news-slider').slick({
    	arrows: true,
    	dots: true,
    	infinite: false,
    	responsive: [
        	{
            	breakpoint: 1001,
                settings: {
					arrows: false
                }
			}
		]
	});
	
	//main slider
    $('#js-main-slider').slick({
    	arrows: true,
    	dots: true,
    	infinite: false,
    	responsive: [
        	{
            	breakpoint: 1001,
                settings: {
					dots: false
                }
			},{
            	breakpoint: 751,
                settings: {
					dots: true,
					arrows: false
                }
			}
		]
	});
	
	//item slider
    $('#js-item-slider').slick({
    	arrows: false,
    	dots: true,
    	infinite: false
	});
 
});

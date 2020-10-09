$(document).ready(function(){
	//Открыть/закрыть поиск в шапке
	$('.js-header-search-open').on('click', function(){
		$('#js-header-search').add('#js-header-bar').toggleClass('open');
		$('.main').toggleClass('open-search');
		$('.header').toggleClass('open-search');
	});
	
	//Открыть/закрыть попап с формой входа
	$('.js-enter-open').on('click', function(){
		$('#js-enter').fadeToggle(250);
	});
	
	//Открыть/закрыть мобильное меню
	$('.js-mob-menu-open').on('click', function(){
		$('#js-menu-overlay').fadeToggle(250);
		$('#js-mob-menu-btn').add($('#js-mob-menu')).toggleClass('open');
		$('#js-wrapper').toggleClass('drop-left');
	});
	
	//Открыть/закрыть мобильный фильтр
	$('.js-filter-open').on('click', function(){
		$('#js-filter-overlay').fadeToggle(250);
		$('#js-filter').toggleClass('open');
		$('#js-wrapper').toggleClass('drop-right');
	});
	
	
	//Табы на детальной странице
	$(".js-tab-item").not(":first-child").hide();
	$(".js-tab").eq(0).addClass("active");
	$(".js-tab-item").eq(0).addClass("active");
	$(".js-tab").click(function() {
		if(!$(this).hasClass('active')){
			var tabsContainer = $(this).closest(".js-tab-wrap"),
				tabs = tabsContainer.find(".js-tab"),
				tabsItems = tabsContainer.find(".js-tab-item");                
			tabs.removeClass("active").eq($(this).index()).addClass("active");
			tabsItems.removeClass("active").hide().eq($(this).index()).fadeIn(250).addClass("active");
		}
	});
	
	//Перенос блоков при адаптиве на детальной странице
	if($(window).width() <= 1000){
		$('#js-item-flags').remove().prependTo('#js-item-bar');
		$('#js-item-reviews').remove().prependTo('#js-hide-tab');
	};
});



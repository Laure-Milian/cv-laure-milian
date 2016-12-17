
(function() {
	
	"use strict";

	var app = {

		init: function() {
			app.getMenuTopValue();
			app.listenersMenu();
		},

		listenersMenu: function() {
			$('.li_menu').on('click', app.activeMenuItem).bind(this);
			$('.a_menu').on('click', app.scrollMenu).bind(this);

			$('.a_menu').on('click', app.test).bind(this);
		},

		activeMenuItem: function() {
			$('.li_menu').removeClass("active")
			$(this).addClass("active");
		},

		scrollMenu: function() {
			var page = $(this).attr('href');
			var speed = 700;
			$('html, body').animate( {scrollTop: $(page).offset().top}, speed);
		},

		getMenuTopValue: function() {
			var menuTopValue = $('.container_menu').offset().top;
			$(window).scroll(function() {
				app.stickyNav(menuTopValue);
			});
		},
		
		stickyNav: function(menuTop) {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > menuTop) {
				$('.container_menu').addClass('sticky');
			} else {
				$('.container_menu').removeClass('sticky');
			}
		}

	}

	app.init();

})();
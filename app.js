
(function() {
	
	"use strict";

	var app = {

		init: function() {
			app.getMenuTopValue();
			app.listenersMenuClick();
			app.listenersSectionsScroll();
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
		},

		listenersMenuClick: function() {
			$('.li_menu').on('click', app.activeMenuItem).bind(this);
			$('.a_menu').on('click', app.scrollMenu).bind(this);
		},

		activeMenuItem: function() {
			$('.li_menu').removeClass("active")
			$(this).addClass("active");
		},

		scrollMenu: function() {
			var page = $(this).attr('href');
			var speed = 600;
			$('html, body').animate( {scrollTop: $(page).offset().top - 100}, speed);
		},

		listenersSectionsScroll: function() {
			var competencesTopValue = $('#competences').offset().top;
			var experienceTopValue = $('#experiences_pro').offset().top;
			var formationTopValue = $('#formation').offset().top;
			var projetsTopValue = $('#projets').offset().top;

			$(window).scroll(function() {
				var scrollTop = $(window).scrollTop() + 200;
				console.log(scrollTop);
				if (scrollTop > projetsTopValue) {
					$('.li_menu').removeClass("active");
					$('.projets').addClass("active");					
				} 
				else if (scrollTop > formationTopValue) {
					$('.li_menu').removeClass("active");
					$('.formation').addClass("active");
				} 
				else if (scrollTop > experienceTopValue) {
					$('.li_menu').removeClass("active");
					$('.XPpro').addClass("active");
				}
				else {
					$('.li_menu').removeClass("active");
					$('.competences').addClass("active");
				}
			});
		}

	}

	app.init();

})();

(function() {
	$('.div_competences').show();
	$('.div_formation, .div_XPpro, .div_projets').hide();

	$(".competences").on('click', function() {
		$('.competences').addClass('active');
		$('.formation, .XPpro, .projets').removeClass('active');
		$('.div_competences').show();
		$('.div_formation, .div_XPpro, .div_projets').hide();
	})

	$('.XPpro').on('click', function() {
		$('.XPpro').addClass('active');
		$('.competences, .formation, .projets').removeClass('active');
		$('.div_XPpro').show();
		$('.div_competences, .div_formation, .div_projets').hide();
	})

	$('.formation').on('click', function() {
		$('.formation').addClass('active');
		$('.competences, .XPpro, .projets').removeClass('active');
		$('.div_formation').show();
		$('.div_competences, .div_XPpro, .div_projets').hide();
	})

	$('.projets').on('click', function() {
		$('.projets').addClass('active');
		$('.competences, .formation, .XPpro').removeClass('active');
		$('.div_projets').show();
		$('.div_competences, .div_formation, .div_XPpro').hide();
	})

$('.ui.sticky')
  .sticky()
;
})();
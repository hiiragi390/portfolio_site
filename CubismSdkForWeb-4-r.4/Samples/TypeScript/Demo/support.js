
$(function(){

	var logo = $('body');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) { //スクロールが500pxを越えたら
			logo.addClass('invert');
            logo.removeClass('tp');
		} else { //スクロールが500pxを越えなければ
			logo.removeClass('invert');
            logo.addClass('tp');
		}
	});

});
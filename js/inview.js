$(function() {
	// フェードイン
	$('.inviewfadeIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('fadeIn');
		} else {
			$(this).stop().removeClass('fadeIn');
        }
	});

	// 上へスライド
	$('.inviewUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('Up');
		} else {
			$(this).stop().removeClass('Up');
		}
	});
	// ズームイン
	$('.inviewzoomIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('zoomIn');
		} else {
			$(this).stop().removeClass('zoomIn');
		}
	});
	// フェードインしながら上へスライド     
	$('.inviewfadeInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().addClass('fadeInUp');
		} else {
			$(this).stop().removeClass('fadeInUp');
		}
	});
});	
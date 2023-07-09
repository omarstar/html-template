

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge:  [ '1281px',  '1680px' ],
		large:   [ '981px',   '1280px' ],
		medium:  [ '737px',   '980px'  ],
		small:   [ null,      '736px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	var video = document.getElementById('video-background');
	var isVideoPlaying = false;

	function handleVideoPlayback() {
		if (window.innerWidth > 980 && !isVideoPlaying) {
			video.play();
			isVideoPlaying = true;
		} else if (window.innerWidth <= 980 && isVideoPlaying) {
			video.pause();
			isVideoPlaying = false;
		}
	}

	function updateButtonClass(){
		var windowWidth = $(window).width();
		var inTouchButton = $('#get-in-touch-button');

		if(windowWidth > 980){
			inTouchButton.removeClass('medium').addClass('large');
		} else {
			inTouchButton.removeClass('large').addClass('medium');
		}
	}

	//OWL Carousel initializer
	$(document).ready(function() {
		const options = {
			autoPlay: true,
			slideSpeed: 200,
			paginationSpeed: 500,
			items: 5,
			itemsDesktop: [1199, 4],
			itemsDesktopSmall: [979, 3],
			itemsMobile: [479,2],
		}
		
		$(".owl-carousel").owlCarousel(options);

		handleVideoPlayback();

		updateButtonClass();
	   
	  });
	
	$(window).resize(function(){
		  handleVideoPlayback();
		updateButtonClass();
	  })

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -22,
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);
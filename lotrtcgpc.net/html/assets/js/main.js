/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



(function($) {
	
	var includes = $('[data-include]');
  $.each(includes, function () {
    var file = 'views/' + $(this).data('include') + '.html'
    $(this).load(file)
    //alert( "Loaded " + file );
  })
  
  var	$window = $(window);

  $window.on('load', function() {
  	window.setTimeout(function() {
  		$body.removeClass('is-preload');
  	}, 100);
  });

})(jQuery);


function loadDropdowns() {
  	//alert("window loaded");
    var	$window = $(window),
    	$body = $('body'),
    	$header = $('#header'),
    	$banner = $('#banner');

    // Breakpoints.
    	breakpoints({
    		wide:      ( '1281px',  '1680px' ),
    		normal:    ( '981px',   '1280px' ),
    		narrow:    ( '737px',   '980px'  ),
    		narrower:  ( '737px',   '840px'  ),
    		mobile:    ( '481px',   '736px'  ),
    		mobilep:   ( null,      '480px'  )
    	});

    // Play initial animations on page load.
    	

    // Dropdowns.
    	$('#nav > ul').dropotron({
    		alignment: 'right'
    	});
    	
    	//alert("Loaded dropotron");

    // NavPanel.

    	// Button.
    		$(
    			'<div id="navButton">' +
    				'<a href="#navPanel" class="toggle"></a>' +
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

    // Header.
    	if (!browser.mobile
    	&&	$header.hasClass('alt')
    	&&	$banner.length > 0) {

    		$window.on('load', function() {

    			$banner.scrollex({
    				bottom:		$header.outerHeight(),
    				terminate:	function() { $header.removeClass('alt'); },
    				enter:		function() { $header.addClass('alt reveal'); },
    				leave:		function() { $header.removeClass('alt'); }
    			});

    		});

    	}
  }




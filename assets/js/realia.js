jQuery( document ).ready(function($) {
	'use strict';

	/**
	 * Tabs
	 */
	$( '.tabs-navigation a' ).on('click', function(e) {
		var href = $(this).attr('href');
		if (href.indexOf('#') == 0) {
			e.preventDefault();
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
			var tab = $(this).attr('href');
	        $(this).closest('.tabs').find('.tab-content').not(tab).css('display', 'none');
			$(tab).fadeIn();
		}
	});

	/**
	 * Property gallery
	 */
	if ($( '.property-gallery-index' ).length !== 0 && $( '.property-gallery-preview' ).length !== 0) {
		$( '.property-gallery-index a' ).on('click', function() {
			$( this ).closest( 'ul' ).find( 'li' ).removeClass( 'active' );
			$( this ).closest( '.property-gallery' ).find( '.property-gallery-preview img' ).attr( 'src', $( this ).attr( 'rel' ) );
			$( this ).parent().addClass( 'active' );
		});
	}

	/**
	 * Sort form
	 */
	var sort_form = $( '#sort-form' );
	$( 'select' , sort_form ).change(function() {
		sort_form.submit();
	});

	/**
	 * Remove submission
	 */
	$( '.property-button-delete' ).on('click', function(e) {
		var button = $( this );
		e.preventDefault();
		$.ajax( button.attr( 'href' ) ).success(function(data) {
			location.reload();
		});
	});

	/**
	 * Google Map
	 */
	var map = $( '#map' );

	if (map.length) {
		var styles = map.data( 'styles' );

		$.ajax({
			url: '?properties-feed=true',
			success: function(markers) {
				map.google_map({
					geolocation: map.data('geolocation'),
					infowindow: {
						borderBottomSpacing: 0,
						height: 120,
						width: 424,
						offsetX: 48,
						offsetY: -87
					},
					center: {
						latitude: map.data( 'latitude' ),
						longitude: map.data( 'longitude' )
					},
					zoom: map.data( 'zoom' ),
					marker: {
						height: 56,
						width: 56
					},
					cluster: {
						height: 40,
						width: 40,
						gridSize: map.data( 'grid-size' )
					},
					styles: styles,
					transparentMarkerImage: map.data( 'transparent-marker-image' ),
					transparentClusterImage: map.data( 'transparent-marker-image' ),
					markers: markers
				});
			}
		});
	}

	/**
	 * Simple map
	 */
	var simple_map = $( '#simple-map' );
	if (simple_map.length) {
		var styles = simple_map.data( 'styles' );

		simple_map.google_map({
			center: {
				latitude: simple_map.data( 'latitude' ),
				longitude: simple_map.data( 'longitude' )
			},
			zoom: simple_map.data( 'zoom' ),
			styles: styles,
			transparentMarkerImage: simple_map.data( 'transparent-marker-image' ),
			marker: {
				height: 56,
				width: 56
			},
			markers: [{
				latitude: simple_map.data( 'latitude' ),
				longitude: simple_map.data( 'longitude' ),
				marker_content: '<div class="simple-marker"></div>'
			}]
		});
	}

	/*
     * Submission form gateway proceed button toggler
     */
	$( ".payment-form input[id^='gateway-']" ).change(function() {
		var proceed = $( this ).data( 'proceed' );
		var form = $( this ).parents( 'form:first' );
		var submit = form.find( '[name="process-payment"]' );
		var info = form.find( '#non-proceed-info' );

		if ($( this ).is( ':checked' )) {
			if (proceed) {
				info.addClass( 'hidden' );
				submit.removeClass( 'hidden' );
			} else {
				info.removeClass( 'hidden' );
				submit.addClass( 'hidden' );
			}
		}
	}).change();
});

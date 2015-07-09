<?php if ( empty( $instance['hide_garages'] ) ) : ?>
	<!-- GARAGES -->
	<div class="form-group">
		<?php if ( 'labels' == $input_titles ) : ?>
			<label for="<?php echo esc_attr( $args['widget_id'] ); ?>_garages"><?php echo __( 'Garages', 'realia' ); ?></label>
		<?php endif; ?>

		<input type="text" name="filter-garages"
				<?php if ( 'placeholders' == $input_titles ) : ?>placeholder="<?php echo __( 'Garages', 'realia' ); ?>"<?php endif; ?>
		       class="form-control" value="<?php echo ! empty( $_GET['filter-garages'] ) ? $_GET['filter-garages'] : ''; ?>"
		       id="<?php echo esc_attr( $args['widget_id'] ); ?>_garages">
	</div><!-- /.form-group -->
<?php endif; ?>

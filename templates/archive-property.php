<?php get_header(); ?>

<section id="primary" class="content-area">
	<main id="main" class="site-main content" role="main">
		<?php if ( have_posts() ) : ?>
			<header class="page-header">
				<?php the_archive_title( '<h1 class="page-title">', '</h1>' ); ?>
				<?php the_archive_description( '<div class="taxonomy-description">', '</div>' ); ?>
			</header><!-- .page-header -->

			<?php if ( get_theme_mod( 'realia_general_show_property_archive_as_grid', null ) == '1' ) : ?>
				<div class="property-box-archive">
			<?php endif; ?>

			<?php while ( have_posts() ) : the_post(); ?>
				<?php if ( get_theme_mod( 'realia_general_show_property_archive_as_grid', null ) == '1' ) : ?>
						<?php echo Realia_Template_Loader::load( 'properties/box' ); ?>
				<?php else : ?>
					<?php echo Realia_Template_Loader::load( 'properties/row' ); ?>
				<?php endif; ?>
			<?php endwhile; ?>

			<?php if ( get_theme_mod( 'realia_general_show_property_archive_as_grid', null ) == '1' ) : ?>
				</div><!-- /.property-box-archive -->
			<?php endif; ?>

			<?php the_posts_pagination( array(
				'prev_text'          => __( 'Previous page', 'realia' ),
				'next_text'          => __( 'Next page', 'realia' ),
				'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'realia' ) . ' </span>',
			) ); ?>
		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
		<?php endif; ?>

	</main><!-- .site-main -->
</section><!-- .content-area -->

<?php get_footer(); ?>
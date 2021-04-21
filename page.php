<?php get_header(); ?>
<?php $tdu = get_template_directory_uri(); ?>




<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <!-- article -->
        <article id="post-<?php the_ID(); ?>">

            <div class="container">
                <div class="grid">
                    <?php $i = 0; ?>
                    <?php $w = false; ?>
                    <?php while (have_rows('boxes')) : the_row(); ?>

                        <?php if ($i >= 24 and $w == false) : ?>
                            <div class="grid-item grid-item--width5">
                                <div class="businessouter  grid_item_inner">
                                    <div class="businesscard">
                                        <h1>Stefano Gris</h1>
                                    </div>
                                </div>
                            </div>
                            <?php $w = true; ?>
                        <?php endif; ?>
                        <?php $width = get_sub_field('width'); ?>
                        <?php $classname = 'grid-item--width' . $width; ?>
                        <div class="grid-item <?php echo $classname; ?>">
                            <div class="grid_item_inner">
                                <a href="<?php echo get_sub_field('link'); ?>" target="_blank">
                                    <img src="<?php echo get_sub_field('image')['url']; ?>" alt="">
                                </a>
                            </div>
                        </div>
                        <?php $i = $i + $width; ?>
                    <?php endwhile; ?>


                    <!-- <div class="grid-item"><img src="<?php echo $tdu; ?>/img/alert-circle.png" alt=""></div>
                    <div class="grid-item"><img src="<?php echo $tdu; ?>/img/alert-circle.png" alt=""></div>
                    <div class="grid-item grid-item--width2"><img src="<?php echo $tdu; ?>/img/alert-circle.png" alt=""></div>
                    <div class="grid-item grid-item--width6">
                        <div class="businesscard">
                            <h1>Stéphane Gris</h1>
                            <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
                        </div>
                    </div>
                    <div class="grid-item"><img src="<?php echo $tdu; ?>/img/alert-circle.png" alt=""></div>
                    <div class="grid-item grid-item--width2"><img src="<?php echo $tdu; ?>/img/alert-circle.png" alt=""></div>
                    <div class="grid-item"><img src="<?php echo $tdu; ?>/img/alert-circle.png" alt=""></div> -->
                </div>
            </div>
            <div style="clear:both;"></div>



            <?php include('section-loop.php'); ?>


            <div class="container">
                <?php the_content(); ?>
            </div>



        </article>
        <!-- /article -->

    <?php endwhile; ?>

<?php else : ?>

    <!-- article -->
    <article class="container">

        <h2><?php _e('Sorry, nothing to display.', 'webfactor'); ?></h2>

    </article>
    <!-- /article -->

<?php endif; ?>






<?php get_footer(); ?>
(function ($, root, undefined) {

    $(function () {

        'use strict';


        //MASONRY GALLERY
        putImagesRandomPosition();
        setTimeout(doMasonry, 500);
        setTimeout(redoMasonry, 1000);
        setTimeout(makeImagesSlideIn, 1500);


        let $grid;

        function putImagesRandomPosition() {

            $('.grid-item').addClass('invisible');
            $('.grid-item').each(function (i) {
                var $this = $(this);
                var randomX = (Math.random() - 0.5) * 2000;
                var randomY = (Math.random() - 0.5) * 2000;
                $this.css({
                    "-webkit-transform": "translate(" + randomX + "px," + randomY + "px)",
                    "transform": "translate(" + randomX + "px," + randomY + "px)",
                });

            });
        }



        function doMasonry() {
            $grid = $('.grid').masonry({
                // options
                itemSelector: '.grid-item',
                columnWidth: 20
            });

        }
        function redoMasonry(grid) {
            console.log('redo masonry'), grid;
            grid.masonry('layout');
        }

        function makeImagesSlideIn() {
            $('.grid-item').removeClass('invisible');
            $('.grid-item').addClass('visible');
        }

        $(window).on('resize', function (e) {
            redoMasonry($grid);
        })




    })
})(jQuery, this);

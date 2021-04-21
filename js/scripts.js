(function ($, root, undefined) {

    $(function () {

        'use strict';

        var $body = $('body');

        $body.addClass('overflow_hidden');
        $body.addClass('loading');

        //MASONRY GALLERY
        putImagesRandomPosition();
        setTimeout(doMasonry, 500);
        setTimeout(makeImagesSlideIn, 1500);
        setTimeout(redoMasonry, 2400);
        setTimeout(removeOverflowfromBody, 2500);




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


        let msnry;
        function doMasonry() {

            const masonryOptions = {
                // options
                itemSelector: '.grid-item',
                columnWidth: 20
            }

            // $('.grid').masonry(masonryOptions);
            msnry = new Masonry('.grid', masonryOptions);



        }

        function removeOverflowfromBody() {
            $body.removeClass('overflow_hidden');
        }

        function redoMasonry() {
            console.log('redo masonry', msnry);
            // $('.grid').masonry('layout');
            msnry.layout();
        }


        function makeImagesSlideIn() {
            $('.grid-item').removeClass('invisible');
            $('.grid-item').addClass('visible');


            $body.removeClass('loading');
        }

        $(window).on('resize', function (e) {

            redoMasonry();
        })




    })
})(jQuery, this);

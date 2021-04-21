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
            $('.grid').masonry({
                // options
                itemSelector: '.grid-item',
                columnWidth: 20
            });

        }


        function makeImagesSlideIn() {
            $('.grid-item').removeClass('invisible');
            $('.grid-item').addClass('visible');

            $body.removeClass('overflow_hidden');
            $body.removeClass('loading');
        }

        $(window).on('resize', function (e) {
            doMasonry();
        })




    })
})(jQuery, this);

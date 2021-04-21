(function ($, root, undefined) {

    $(function () {

        'use strict';


        //MASONRY GALLERY
        doMasonry()

        $('.grid').each(function (i) {
            $this = $(this);
            randomX = (Math.random() - 0.5) * 2000;
            randomY = (Math.random() - 0.5) * 2000;
            console.log({ randomX, randomY });
            $this.css({
                "-webkit-transform": "translate(" + randomX + "px," + randomY + "px)",
                "transform": "translate(" + randomX + "px," + randomY + "px)",
            });
        });


        function doMasonry() {
            $('.grid').masonry({
                // options
                itemSelector: '.grid-item',
                columnWidth: 20
            });

        }

        setTimeout(doMasonry, 500);
        setTimeout(doMasonry, 1250);

        //END OF MASONRY GALLERY


    })
})(jQuery, this);

(function ($, root, undefined) {

    $(function () {

        'use strict';


        //MASONRY GALLERY
        doMasonry()


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

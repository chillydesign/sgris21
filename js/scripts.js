(function ($, root, undefined) {

    $(function () {

        'use strict';


        //MASONRY GALLERY

        $('.grid').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 20
        });

        // setTimeout(function () { msnry.layout(); }, 100);
        // setTimeout(function () { msnry.layout(); }, 250);

        //END OF MASONRY GALLERY


    })
})(jQuery, this);

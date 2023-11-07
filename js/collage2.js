(function(document, $) {

    //Get the height of the carousel items
    var boxHeight = 400;
    $('.collage-carousel .item').each(function() {
        if ($(this).height() >= boxHeight) {
            boxHeight = $(this).height();
        }
    });
    //Add the position absolute to the items AFTER getting
    //their height & apply the heigh to the container
    $('.collage-carousel .item').css('position', 'absolute');
    $('.collage-carousel').css('height', boxHeight + 'px');

    //Controls which way everything goes
    //Action = prev or next
    function slideChange(action) {
        //Get the active slide
        var activeSlide = $('.collage-carousel .item.active');
        //Create a new slide; either the next one or prev one
        var newSlide = (action == 'prev') ? activeSlide.prev() : activeSlide.next();
        //If you've reached the last slide, or you're on the first slide
        //and need to go back, this will calculate that next slide
        if (!$(newSlide).length) {
            newSlide = (action == 'prev') ? $('.collage-carousel .item:last-child') : $('.collage-carousel .item:first-child');
        }
        //Clear out any active classes
        $('.collage-carousel .item').removeClass('active');
        //Attach the new slide as the active one
        newSlide.addClass('active');
        //Reset the active slide to the new slide
        activeSlide = newSlide;
    }

    //Go back 1 slide
    $('.prev').on('click', function() { slideChange('prev'); });
    //Advance 1 slide
    $('.next').on('click', function() { slideChange('next'); });
    
})(document, jQuery);
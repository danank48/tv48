$('.channellist li').on('click', function(){
    $('.channellist li').removeClass('selected');
    $(this).addClass('selected');
});
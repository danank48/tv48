//<![CDATA[

$(function() {
    $(".channellist li").on("click", function() {
        $("iframe").attr({
            src: $(this).attr("ch"),
            poster: $(this).attr("moviesposter"),
            autoplay: "autoplay",
        });
    });
    $("iframe").attr({
        src: $(".channellist li").eq(0).attr("ch"),
        poster: $(".channellist li").eq(0).attr("moviesposter"),
    });
});

//]]>
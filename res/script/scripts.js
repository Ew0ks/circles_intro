/**
 * Created by admin on 29/12/2016.
 */

var myVideo = document.getElementById('bgvid');
if (typeof myVideo.loop == 'boolean') { // loop supported
    myVideo.loop = true;
} else { // loop property not supported
    myVideo.on('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}
myVideo.play();

$(function() {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    setTimeout(BodyScroll, 4000);
});

function BodyScroll() {
    $('body').css('overflow-y' , 'auto');
}
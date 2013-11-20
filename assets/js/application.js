$(function() {
  $('.cover-play-video').on('click', function() {
    $('.video-overlay').addClass('on');
  });

  $('.video-close-button').on('click', function() {
    $('.video-overlay').removeClass('on');
  });
})
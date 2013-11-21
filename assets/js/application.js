$(function() {
  $('.video-play-button').on('click', startVideo);
  $('.video-close-button').on('click', stopVideo);
  $('.video-overlay').on('click', stopVideo);

  $('.menu-toggle').on('click', toggleMenu);

  function startVideo() {
    $('.video-overlay').addClass('on');
    $('.video-embed').attr('src', 'http://player.vimeo.com/video/70818122?autoplay=1');
  }

  function stopVideo() {
    $('.video-overlay').removeClass('on');
    $('.video-embed').attr('src', '');
  }

  function toggleMenu() {
    $('body').toggleClass('show-menu')
  }
})
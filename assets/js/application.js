$(function() {
  $('.video-play-button').on('click', startVideo);
  $('.video-close-button').on('click', stopVideo);
  $('.video-overlay').on('click', stopVideo);

  $('.menu-toggle').on('click', toggleMenu);

  $('.open-buy-overlay').on('click', function() {
    $('.buy-overlay').addClass('on');
  });

  $('.close-buy-overlay').on('click', function() {
    $('.buy-overlay').removeClass('on');
  });

  $('.buy-overlay-change-image').on('click', function() {
    var $currentImage = $('.buy-overlay-image'),
      currentImageIndex;

    currentImageIndex = parseInt($currentImage.attr('src').match(/.*\/(\d).jpg/)[1]) - 1;
    currentImageIndex = $(this).hasClass('next') ? ++currentImageIndex : --currentImageIndex;
    currentImageIndex = (currentImageIndex % 4) + 1;

    $currentImage.attr('src', '/assets/images/issue-1/buy/' + currentImageIndex + '.jpg');
  })

  function startVideo() {
    $('.video-overlay').addClass('on');
    $('.video-embed').attr('src', 'http://player.vimeo.com/video/82208796?autoplay=1');
  }

  function stopVideo() {
    $('.video-overlay').removeClass('on');
    $('.video-embed').attr('src', '');
  }

  function toggleMenu() {
    $('body').toggleClass('show-menu')
  }
})

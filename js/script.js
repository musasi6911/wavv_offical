$(function(){

  // RWD Menu Control
  $('.bi-list').click(function(){
    $('.rwd-mask').css('display', 'block');
    $('.nav-main, .nav-sub').css('left', 0);
  })

  $('.bi-person-circle').click(function(){
    $('.rwd-mask').css('display', 'block');
    $('.top').css('right', 0);
  })

  // User Dropdown Menu
  $('.top-user_dropdown').hide();
  $('.top-userhead').click(function(){
    $('.top-user_dropdown').toggle();
  })

  // Show Player
  $('.list-square a, .song-detail_more a, .song-detail_play, .user-tracks ul li').click(function(){
    $('.player').animate({bottom: 0}, 500);
    return false;
  })

  // Show Search
  $('#top-search').click(function(){
    if($(window.innerWidth >= 768)){
      $('.top-search').animate({top: 0, opacity: 1}, 500);
    }
    if($(window.innerWidth <= 768)){
      $('.top-search').animate({bottom: 10, opacity: 1}, 500);
    }
  })

  // Composer Page
  $('#file-upload').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).next('p').text(file);
    $(this).next('p').css('color', '#333');
  });

  var imgInp = document.getElementById('img-upload-input');
  var blah = document.getElementById('show-img');

  imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      $('.img-upload p').css('display', 'none');
      $('.img-upload i').css('display', 'none');
      blah.style.display = 'block';
      blah.src = URL.createObjectURL(file);
    }
  }

  

})































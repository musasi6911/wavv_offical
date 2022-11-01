$(function(){

  // Show Player
  $('.list-square a, .song-detail_more a, .song-detail_play').click(function(){
    $('.player').animate({bottom: 0}, 500);
    return false;
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































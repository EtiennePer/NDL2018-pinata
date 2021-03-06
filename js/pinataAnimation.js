/*
 * Permet d'animer la pinata pour permettre de la rendre
 * légèrement visible.
 */
$(function() {

  var discovered = false;
  var clicked = false;
  var firstPinataLife = 5;

  // When the button is hover (discover the pinata a little)
  $('.pinataHider').mouseover(function() {

    if (discovered == false) {
      discovered = true;
      var rd = Math.floor(Math.random() * 4);

      var bt_top = $('.pinataHider').css('top');
      var bt_left = $('.pinataHider').css('left');
      var bt_width = $('.pinataHider').width();
      var bt_height = $('.pinataHider').height();

      var bt_top = $('.pinataHider').css('top');
      var bt_left = $('.pinataHider').css('left');
      var image_width = $('#pinataImg').width();
      var image_height = $('#pinataImg').height();

      // Choose a random animation
      start_animations = {
        top: '50%',
        left: '50%',
        opacity: '0'
      };
      if (rd == 0) { // to bottom
        after_animations = {
          top: parseInt(bt_top) + parseInt(bt_height/2) + parseInt(image_height/2) ,
          left: '50%',
          opacity: '1'
        };
      } else if (rd == 1) { // to top
        after_animations = {
          top: parseInt(bt_top) - parseInt(bt_height/2) + parseInt(image_height/2) ,
          left: '50%',
          opacity: '1'
        };
      } else if (rd == 2) { // to left
        after_animations = {
          top: '50%',
          left: parseInt(bt_left) - parseInt(bt_width/2) + parseInt(image_width/2),
          opacity: '1'
        };
      } else if (rd == 3) {
        after_animations = { // to right
          top: '50%',
          left: parseInt(bt_left) + parseInt(bt_width) - parseInt(image_width/2),
          opacity: '1'
        };
      }

      $("#pinataImg").css(start_animations)
        .animate(after_animations, 800, function() {
          //callback
        });
    }
  });

  function clickPinataEvent(){
    if (clicked == false) {
      clicked = true;

      // Animate to grow up
      $(this).css({
          width: '2rem',
          height: '2rem',
          zIndex: '9999'
        })
        .animate({
          width: '10rem',
          height: '10rem',
          opacity: '1'
        }, 800, function() {
          //callback
          launchGame();
        });
    }
    else{
      //Enlever un point de vie
      firstPinataLife -= 1;
      if(firstPinataLife == 4){
        $(this).attr('src', 'images/Fortnite_llama_pinata_Yellow.png');
      }
      if(firstPinataLife == 2){
        $(this).attr('src', 'images/Fortnite_llama_pinata_Red.png');

      }

      if(firstPinataLife == 0){
        var video = document.createElement('video');
        video.style.width = "15rem";
        video.style.height = "15rem";
        video.style.left = $(this).css('left');
        video.style.top = $(this).css('top');
        video.style.position = 'absolute';

        var source = document.createElement('source');
        source.setAttribute('src', "images/awesome.webm");
        video.appendChild(source);
        $(this).parent().append(video);
        video.play();
        $(this).remove();
      }
    }
  }

  // If the little pinata is clicked
  $(".pinataImg").click(clickPinataEvent);

});

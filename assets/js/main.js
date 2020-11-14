window.addEventListener('DOMContentLoaded', function () {
  'use strict'



  $('.how-start').on('click', function () {
    $('.d-none').slideToggle();
  });


  (function () {
    var links = document.querySelectorAll('a'),
      param = window.location.search ? window.location.search.replace('?', '') : null;

    if (links && param) {
      for (var i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('data-fancybox') || links[i].classList.contains('play-button') || (links[i].href.indexOf(param) >= 0) || (links[i].href.indexOf('tel:') >= 0) || (links[i].href.indexOf('mailto:') >= 0) || (links[i].href.indexOf('youtube.com') >= 0) || (links[i].href.indexOf('youtu.be') >= 0) || (links[i].href.indexOf('telegram') >= 0) || (links[i].href.indexOf('t.me') >= 0) || (links[i].href.indexOf('whatsapp') >= 0)) {
          continue;
        } else {
          var query_concatenator = '?';

          if (links[i].href.indexOf(query_concatenator) >= 0) {
            query_concatenator = '&';
          }

          links[i].href = links[i].href + query_concatenator + param;
        }
      }
    }
  })();



  function timerTimer() {
    //TIMER
    let minute = document.querySelector('#minutes'),
      second = document.querySelector('#seconds');



    const startingMinutes = 15;
    let time = startingMinutes * 60;


    let timeInterval = setInterval(updateCountDown, 1000);

    function updateCountDown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;

      minute.innerHTML = `${minutes}`;
      second.innerHTML = `${seconds}`;
      time--;
      if (time <= -1) {
        clearInterval(timeInterval);
      }
    }

  }

  function timerTimer2() {
    //TIMER2

    let minute2 = document.querySelector('#minutes2'),
      hour = document.querySelector('#hours');

    const startingHours = 13;
    const startingMinutes2 = 15;
    let time2 = ((startingHours * 60) + startingMinutes2) * 60;

    let timeInterval2 = setInterval(updateCountDown2, 1000);

    function updateCountDown2() {
      const hours = Math.floor(time2 / 60 / 60);
      let minutes2 = Math.floor(time2 / 60 % 60);

      minute2.innerHTML = `${minutes2}`;
      hour.innerHTML = `${hours}`;
      time2--;

      if (time2 <= -1) {
        clearInterval(timeInterval2);
      }

    }
  }


  let checkTimer = document.querySelector('.dop2-timer')
  checkTimer ? timerTimer() : console.log('Нет элемента');


  let checkTimer2 = document.querySelector('#hours')
  checkTimer2 ? timerTimer2() : console.log('Нет элемента');




  $('.main__video2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    arrows: true,
    fade: true,
    asNavFor: '.child__video2',
    draggable: false
  });
  $('.child__video2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.main__video2',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  let done = document.getElementById('done'),
    video = document.getElementById('video'),
    done2 = document.getElementById('done2'),
    video2 = document.getElementById('video2'),
    done3 = document.getElementById('done3'),
    video3 = document.getElementById('video3'),
    frame = document.getElementById('frame'),
    frame2 = document.getElementById('frame2'),
    frame3 = document.getElementById('frame3'),
    heading = document.getElementById('heading'),
    text = document.getElementById('text'),
    text2 = document.getElementById('text2'),
    text3 = document.getElementById('text3'),
    block = document.getElementById('block'),
    block2 = document.getElementById('block2'),
    block3 = document.getElementById('block3')

  heading.innerHTML = block.childNodes[1].innerHTML

  $('.main__video2').on('afterChange', () => {
    if (block.classList.contains('slick-active')) {
      heading.innerHTML = block.childNodes[1].innerHTML
    } else if (block2.classList.contains('slick-active')) {
      heading.innerHTML = block2.childNodes[1].innerHTML
    } else if (block3.classList.contains('slick-active')) {
      heading.innerHTML = block3.childNodes[1].innerHTML
    }
  })


  $('.vp-center').css('display', 'block');

  // frame.addEventListener('click', () => {
  //   heading.innerHTML = text.innerHTML
  // })

  // done.addEventListener('click', () => {
  //   heading.innerHTML = text.innerHTML
  // })

  // frame2.addEventListener('click', () => {
  //   heading.innerHTML = text2.innerHTML
  // })

  // done2.addEventListener('click', () => {
  //   heading.innerHTML = text2.innerHTML
  // })

  // frame3.addEventListener('click', () => {
  //   heading.innerHTML = text3.innerHTML
  // })

  // done3.addEventListener('click', () => {
  //   heading.innerHTML = text3.innerHTML
  // })


  let player = new Vimeo.Player(video);
  let player2 = new Vimeo.Player(video2);
  let player3 = new Vimeo.Player(video3);

  player.on('ended', function () {
    done.classList.add('active')
    frame.classList.add('hide')
  });

  player2.on('ended', function () {
    done2.classList.add('active')
    frame2.classList.add('hide')
  });

  player3.on('ended', function () {
    done3.classList.add('active')
    frame3.classList.add('hide')
  });











});

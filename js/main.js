window.addEventListener('DOMContentLoaded', function () {



    var burger = document.querySelector('.header__burger');
    var burger_menu = document.querySelector('.header__menu');
    var body = document.querySelector('body');
    
    burger.addEventListener('click', function () {

        burger.classList.toggle('active');
        burger_menu.classList.toggle('active');
        body.classList.toggle('lock');


    });



    var close_menu = document.querySelector('.nav');

    close_menu.addEventListener('click', function() {

        burger.classList.remove('active');
        burger_menu.classList.remove('active');
        body.classList.remove('lock');

    });



    var gallery = document.querySelectorAll('.materialboxed');
    var instances_gallery = M.Materialbox.init(gallery);



    var video = document.querySelector('.video-wrapper');

    video.addEventListener('click', function () {

        if (video.classList.contains('ready')) {

            return;

        }

        video.classList.add('ready');

        var src = video.dataset.src;

        video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');

    });
});
(() => {

    document.addEventListener("scroll", () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const fadeIn = document.getElementById("fadeIn");
        /////////////////////////////////
        const skills = document.querySelector("#skillsTitle");
        const skillsPosition = skills.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        const bounce = document.getElementById("languages");
        const zoomIn = document.getElementById("zoomIn");

        if (skillsPosition < screenPosition - 20) {
            skills.classList.add('bounceInRight', 'animated');
            bounce.classList.add('bounce', 'animated');
            zoomIn.classList.add('zoomIn', 'animated');
        }

        if (scrolled === scrollable) {
            fadeIn.classList.add('fadeInDown', 'animated');
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        run();
    });

    function run() {
        var slider = document.querySelector('.js-carousel');
        lory(slider, {
            infinite: 1,
            enableMouseEvents: true,
            classNameFrame: 'js-carousel__frame',
            classNameSlideContainer: 'js-carousel__slides',
            classNamePrevCtrl: 'js-carousel__prev',
            classNameNextCtrl: 'js-carousel__next',
        });
    }
})();
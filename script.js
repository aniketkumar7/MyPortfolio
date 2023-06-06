window.onload = function()
{
    Particles.init({
        selector : '.background',
        maxParticles: 150,
        connectParticles: 'true',
        speed : 1,
        minDistance : 60,
        sizeVariations : 4,
        color : '#2478f7'
    })
}

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').
    classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

let typed = new Typed('.auto-input',{
    strings: ['Learner', 'Front-End Developer', 'Freelancer', 'YouTuber!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

let Card = document.getElementById('Card')

Card.addEventListener('click', function(e) {
    document.querySelector('body').
    classList.toggle('overlay');
})


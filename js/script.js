let videoBtn = document.querySelectorAll('.vid-btn');


videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})


// --js code for event listner--

let menuBtn = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('show');
});

// Added an event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('show')) {
            menuBtn.classList.toggle('active');
            navbar.classList.remove('show');
        }
    });
});

// Added an event listener to the window to close the menu when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar') && !event.target.closest('.menu-btn')) {
        menuBtn.classList.remove('active');
        navbar.classList.remove('show');
    }
});






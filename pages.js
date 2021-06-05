function init(){
    
    const pages = document.querySelectorAll(".page");   
    
    const hamburger = document.querySelector('.menu');
    const hamburgerLines = document.querySelectorAll('.menu line');
    const navOpen = document.querySelector('.nav-open');
    const contact = document.querySelector('.contact');
    const social = document.querySelector('.social');
    const logo = document.querySelector('.logo');

    const tl = new TimelineMax({paused: true, reversed: true});
    tl.to(navOpen,0.5, {y:0})
    .fromTo(contact,0.5,{opacity:0, y:10},{opacity:1, y:0})
    .fromTo(social,0.5,{opacity:0, y:10},{opacity:1, y:0},"-=0.5")
    .fromTo(logo,0.2,{color: 'black'},{color: 'black'},"-=1")
    .fromTo(hamburgerLines,0.2,{stroke: "black"},{stroke: "black"},"-=1");

    hamburger.addEventListener('click',() => {
        tl.reversed() ? tl.play() : tl.reverse();
    })

    function onClick(){
        
    }
}



init();
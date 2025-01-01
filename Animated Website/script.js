var cursor = document.querySelector('#cursor');
var body = document.querySelector('body');

body.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.8
    })
})
var body = document.querySelector("body");
var cursor = document.querySelector("#cursor");
var image= document.querySelector("#image");



body.addEventListener("mousemove", (e) => {
    gsap.to("#cursor",{
        x:e.x,
        y:e.y,
        duration:0.5,
    })
    
})

image.addEventListener("mouseenter",()=>{
    cursor.innerHTML = "View More";
    gsap.to("#cursor",{
        scale:4,
        duration:0.5,
    })
    
})
image.addEventListener("mouseleave",()=>{
    cursor.innerHTML = "";
    gsap.to("#cursor",{
        scale:1,
        duration:0.5,
    })
    
})
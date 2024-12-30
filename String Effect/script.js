var initialPath = "M 10 100 Q 250 100 490 100";
var finalPath = "M 10 100 Q 250 100 490 100";

var string = document.querySelector("#string");
string.addEventListener("mousemove", function (det) {

    initialPath = (`M 10 100 Q ${det.x} ${det.y} 490 100`);
    gsap.to("svg path", {
        duration: 0.2,
        attr: {
            d: initialPath,
        },
        ease:"power3.out"
    
    });


})
string.addEventListener("mouseleave", function () {
    
    gsap.to("svg path",{
        duration:0.8,
        attr:{
            d:finalPath
        },
        ease:"elastic.out(1, 0.2)"
        
    })

})

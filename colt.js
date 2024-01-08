//alert("hi there!");

var pics = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img6.jpeg",
    "img5.jpeg",
    "img7.jpeg"
]

const btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function() {
    if(counter === 6){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;
});


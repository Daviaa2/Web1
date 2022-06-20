let message = "hello";
console.log(message);


let glasses1 = document.querySelector(".glasses_1");

glasses1.addEventListener("mouseover", e => {
    console.log("hovered");
    if (document.img.src == 'glass1.webp'){
        document.img.src='model1.jpeg';
        } 
        else if (document.img.src =='model1.jpeg'){
        document.img.src='glass1.webp';
        }
});

const BASE_URL ="";
let message = "hello";
console.log(message);


 let glasses1 = document.querySelector(".glasses_1");
    glasses1.addEventListener("mouseover", e => {
        console.log("hovered");
        if (glasses1.img.src == 'glass1.webp'){
            glasses1.img.src='model1.jpeg';
            } 
            else if (document.img.src =='model1.jpeg'){
            document.img.src='glass1.webp';
            }
    });

let glasses2 = document.querySelector(".glasses_2");
    glasses2.addEventListener("mouseover", e => {
    console.log("hovered");
});

let glasses3 = document.querySelector(".glasses_3");
    glasses3.addEventListener("mouseover", e => {
    console.log("hovered");
});

let glasses4 = document.querySelector(".glasses_4");
    glasses4.addEventListener("mouseover", e => {
    console.log("hovered");
});

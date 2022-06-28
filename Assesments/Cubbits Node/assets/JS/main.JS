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

const BASE_URL ="https://api.unsplash.com/search/photos/?query=sunglasses&client_id=RBkYAsoEubPVq-lsftl6m4wa2aAvcc8AFj4g9nWtNsw";

let div = document.createElement("div");
div.classList.add("glasses");
console.log(div);

document.querySelector(".showCase").append(div);

fetch(BASE_URL).then(response => response.json())
.then(data => {
  console.log(data);
  //data = data["results"].slice(0, 4);
 
  
  data["results"].slice(0, 4).forEach(r => {
    let img = document.createElement("img");
    img.src = r.["urls"]["small"];
    console.log(img);
    div.append(img);
  });
});
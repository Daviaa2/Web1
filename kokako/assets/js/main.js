console.log("hello ")


const BASE_URL = "https://api.unsplash.com/search/photos/?query=coffee&client_id=WW2w2wSFislyEtDEvaRXoV9GHobIITnYKC7E5Mprau4"

let div = document.querySelector(".featuredGoods_parent");
let images = div.querySelectorAll(".featuredGoods_img");

fetch(BASE_URL).then(response => response.json())
.then(data => {
  console.log(data);  
  data["results"].slice(0, 3).forEach((r,i) => {
    images[i].src = r["urls"]["small"];
  });
});




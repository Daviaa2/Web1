
//calandar and dates//

//calandar poping up on click//
let calandar = document.querySelector(".calendar");

document.querySelector(".arrivals").addEventListener("click", e => {
    calandar.classList.toggle("active");
})

//adding months//
let month = document.createElement("div");
let today = new Date();
const month_name = today.toLocaleString('default', {month: 'long '});

let inner_grid = document.createElement("div");
inner_grid.classList.add("inner_grid");

//getting todays date//
let day = today.getDate();

//adding numbers to calandar//
for(let i = 1; i <= 31; i++)
{
    let square = document.createElement("div");
    square.classList.add("square");

    //fading out numbers//
    if(i < day)
    {
        square.classList.add("disabled");
    }
    
    square.innerHTML = i;
    inner_grid.append(square);
}

calandar.append(month, inner_grid);

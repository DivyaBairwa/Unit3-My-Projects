getdata()
async function getdata() {
    try {
        let res = await fetch("https://masai-food-api.herokuapp.com/api/meals/india");

        let data = await res.json();
        display(data[0].meals);
        console.log("dataarr")
    }
    catch (error) {
        console.log(error);
    }
}
let i = 1;
function display(data) {
    data.map(function (element) {

        let divya = document.createElement("div");

        let img = document.createElement("img")
        img.setAttribute("src", element.strMealThumb);

        let name = document.createElement("p")
        name.innerText = element.strMeal;

        let price = document.createElement("p");
        price.innerText = element.price;

        let button = document.createElement("button")
        button.innerText = "Add To Cart";
        button.setAttribute("id", "addtocart")
        button.addEventListener("click", function () {
            addtocart(elem);
            document.querySelector("#count").innerText = i++;
        })

        divya.append(img, name, price, button);
        document.querySelector("#menu").append(divya);


    });
}

let arr = json.parse(localStorage.getItem("cart")) || [];
function addtocart(elem) {
    arr.push(elem);
    localStorage.setItem("cart", JSON.stringify(arr))
}
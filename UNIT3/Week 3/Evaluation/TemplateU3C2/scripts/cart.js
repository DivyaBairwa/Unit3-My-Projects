let menu=document.getElementById("cart");
let cartpage=JSON.parse(localStorage.getItem("cart"));

display(cartpage)
function display(cartpage){
    menu.innerHTML=null;

}

cartpage.map(function(element,index){
    let divya=document.createElement("div")
    divya.setAttribute("id",div)

    let divya1=document.createElement("div")

    let image=document.createElement("img");
    image.src=element.strMealThumb;

    let name=document.createElement("p");
    name.src="Name :"+element.strMeal;

    let id=document.createElement("p");
    name.src="ID :"+element.idMeal;

    let price=document.createElement("img");
    price.src="Price :"+element.strMealThumb;

    let d=document.createElement("button");
    d.innerText="Remove From Cart";
    d.addEventListener("click",function(){
        cartpage.splice(index,1)
        alert("remove Item")
        localStorage.setItem("cart",JSON.stringify(cartpage))
        window.location.reload();
    })

   divya1.append(name,id,price,d);
   divya.append(image,divya1)
   menu.append(divya)

})
Data=JSON.parse(localStorage.getItem("products"))

function add(){
    window.location.href="/index.html"
}

Data.map(function(element,ind,arr)
{
    var divya=document.createElement("divya")

    var name=document.createElement("p")
    name.innerText=element.name

    var price=document.createElement("p")
    price.innerText=element.price

    var type=document.createElement("p")
    type.innerText=element.type

    var img=document.createElement("img")
    img.innerHTML=element.image

    divya.append(img,name,price,type)

    document.querySelector("#products_data").append(divya)
})

function remove(){
    document.querySelector("#products_data").innerHTML="";
    localStorage.removeItem("products")
}
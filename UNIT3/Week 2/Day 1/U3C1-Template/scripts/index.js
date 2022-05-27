
document.querySelector("#product_form").addEventListener("submit",formsubmit)
var Arr=[]
function show(){
    window.location.href="/inventory.html"
}

function formsubmit(event){
    event.preventDefault();
    function products(w,x,y,z){
        this.name=w;
        this.price=x;
        this.type=y;
        this.image=z;
    }
    var a=document.querySelector("#name").value
    var b=document.querySelector("#price").value
    var c=document.querySelector("#type").value
    var d=document.querySelector("#image").value
     
    var ans=new products(w,x,y,z)
    Arr.push(ans)
    console.log(productArr)
    localStorage.setItem("products",JSON.stringify(Arr))
}
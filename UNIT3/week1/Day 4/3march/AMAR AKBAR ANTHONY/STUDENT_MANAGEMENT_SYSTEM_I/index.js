document.querySelector("#form").addEventListener("submit",formsubmit)
Data=JSON.parse(localStorage.getItem("Data")) || []

function formsubmit(event){
    event.preventDefault();
    name=document.querySelector("#name").value
    number=document.querySelector("#number").value
    city=document.querySelector("#city").value
    function studentDetails(x,y,z){
        this.name=x
        this.number=y
        this.city=z
    }
    var info= new studentDetails(name,number,city)
    console.log(info)
    Data.push(info)
    localStorage.setItem("Data", JSON.stringify(Data))
  
}
document.querySelector("#next").addEventListener("click",function()
{
    window.location.href="/STUDENT MANAGEMENT SYSTEM II/index.html"
})  
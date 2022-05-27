var Data=JSON.parse(localStorage.getItem("Data"))
console.log(studentData)

Data.map(function(element,ind,arr)
{
    var R=document.createElement("tr")

    var C1=document.createElement("td")
    C1.innerText=element.name

    var C2=document.createElement("td")
    C2.innerText=element.number

    var C3=document.createElement("td")
    C3.innerText=element.city
    
    row.append(C1,C2,C3)
    document.querySelector("#Sbody").append(R)
    
})

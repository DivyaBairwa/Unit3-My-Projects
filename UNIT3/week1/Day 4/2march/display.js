var number=localStorage.getItem("num")
    display=document.querySelector("#show_number")
    display.innerText=number

    if(number==6)
    {
        display.setAttribute("id","color")
    }
    
    else if(number==1)
    {
        display.setAttribute("id","color1")
    }
    
    else
    {
        display.setAttribute("id","color2")
    }
    function back(){
        window.location.href="index.html"
    }


document.querySelector("#throw_dice").addEventListener("click",revNum)
function revNum(event){
    event.preventDefault();
    var num=Math.floor(Math.random()*6)+1;
    localStorage.setItem("number",JSON.stringify(num))
    window.lovcation.href="./display.html"
}
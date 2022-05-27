
async function apiCall(url) {
try{
    let res = await fetch(url)
    let data = await res.json();
    return data;
}
catch(err){
    console.log(err)
}

    //add api call logic here


}

let Arr = [];
function appendArticles(articles, main) {
    articles.forEach((el) => {
    

    //add append logic here
  let div = document.createElement('div');

  let titdiv = document.createElement('div');
  let title = document.createElement('p');
  title.innerText = el.title;
  
  title.addEventListener('click',()=>{
      window.location.href = "blog.html";
      Arr.push(el)
     
      localStorage.setItem("article",JSON.stringify(Arr))
  })

  let desdiv = document.createElement('div');
  let des = document.createElement('p')
  des.innerText = el.description;

  let imgDiv = document.createElement('div')
  imgDiv.setAttribute("id","imgDiv")
  
  let image = document.createElement('img')
  image.src = el.urlToImage;
  imgDiv.append(image)

  desdiv.append(des)
  titdiv.append(title);

  div.append(titdiv,desdiv,imgDiv)
  main.append(div);
});

}

export { apiCall, appendArticles }
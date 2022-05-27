let images = [
    "https://th.bing.com/th/id/R.3f47d77cf1341bcb9c688560b14fa72d?rik=425Fd7BguNLMlw&riu=http%3a%2f%2fcafmp.com%2fwp-content%2fuploads%2f2013%2f01%2fBrave-Teaser.jpg&ehk=%2fo0L2xkJcBFjh%2be%2fhxk5STfR%2bsP%2bxbTNVWAQ3JX%2fRHI%3d&risl=&pid=ImgRaw&r=0",
    "https://i5.walmartimages.com/asr/2f7f845e-9757-4ec0-a74c-4622efe8b6d6.79df9353c1b2ee0ef015ac56ac0cb60b.jpeg",
    "https://th.bing.com/th/id/R.478fa1977748c0f2c6f2351a51241910?rik=25Mw%2fYtryQkH2g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-SyyvUP1jHnw%2fUdv1AGJJzJI%2fAAAAAAAACHM%2fs-w89h7LK9E%2fs1600%2f1-mirage-creative-movie-poster-design.jpg&ehk=cTYyM%2fwcm5ZWiAsLFUHhsRdQxwIyZ4BAluCoHq73HGs%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.yXwRghAjNfwFLfHkGu2HvgHaK9?pid=ImgDet&rs=1",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/61da8438155793.57575971afe13.jpg",
    "https://th.bing.com/th/id/OIP._Fr8lyT1cCHjK4XHoFPobQHaDt?w=350&h=175&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.EGXaN-F-C-ti2zKe45KKkAHaEK?w=323&h=180&c=7&r=0&o=5&pid=1.7"
];

let i = 1;
let container = document.getElementById("slideshow");

container.innerHTML = null;
let img = document.createElement("img");
img.src = images[0];
container.append(img);

let id = setInterval(function(){
    if(i==images.length){
        i=0;
    }
    let image = images[i];
    container.innerHTML = null;
    let img = document.createElement("img");
    img.src = image;
    container.append(img);
    i++;
}, 3000)
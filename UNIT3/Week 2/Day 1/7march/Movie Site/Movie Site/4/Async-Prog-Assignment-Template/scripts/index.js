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
}, 2000)



let movieData =[];
function movie(name, date, poster, rating){
    this.name = name;
    this.releaseDate = date;
    this.poster = poster;
    this.rating = rating;
};

let m1 = new movie("Reacher", "02/01/2021", "https://m.media-amazon.com/images/M/MV5BNzQ4MGYzYzAtNjJlOC00NTdkLTlmNTAtMmZjMzZmZTg2YTEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UY562_CR0,0,380,562_.jpg", 8.3);
movieData.push(m1);

let m2 = new movie("Don't Look Up", "15/10/2021", "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY562_CR35,0,380,562_.jpg",7.2);
movieData.push(m2);

let m3 = new movie("Peacemaker", "12/02/2022", "https://m.media-amazon.com/images/M/MV5BODk2NjAyOWMtM2FjZC00MjZhLTkxMjQtZTM3NjJlYTE5MDdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg", 8.1);
movieData.push(m3);

let m4 = new movie("Boba Fett", "23/01/2022", "https://m.media-amazon.com/images/M/MV5BZjllZjE1MWEtYTJhZC00MWIyLTliMjEtYzM3ODc4YzQ2MjFlXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UY720_.jpg", 7.5);
movieData.push(m4);

let m5 = new movie("The Mandalorian", "20/07/2018", "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_QL75_UX380_CR0,0,380,562_.jpg", 8.8);
movieData.push(m5);

let m6 = new movie("Game of Thrones", "13/04/2015", "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UY562_CR17,0,380,562_.jpg", 9.3);
movieData.push(m6);

let m7 = new movie("Gangubai", "25/02/2022", "https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_QL75_UY562_CR35,0,380,562_.jpg", 7.0);
movieData.push(m7);

let m8 = new movie("Son of India", "05/03/2022", "https://m.media-amazon.com/images/M/MV5BNTcxMDM2N2ItMTUxZC00MjYzLTk3NDUtYzZhYTAzOGUyNmY0XkEyXkFqcGdeQXVyMTkyNDAyNjY@._V1_QL75_UY562_CR9,0,380,562_.jpg", 9.2);
movieData.push(m8);

let m9 = new movie("Pushpa", "25/12/2021", "https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX800_.jpg", 8.0);
movieData.push(m9);

localStorage.setItem("movies", JSON.stringify(movieData));

function showMovies(movieData){
    document.getElementById("movies").innerHTML = null;
    movieData.map(function(elem){
        
        let mainDiv = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.poster;

        let name = document.createElement("h3");
        name.innerText = elem.name;

        let date = document.createElement("p");
        date.innerText = elem.releaseDate;

        let rating = document.createElement("p");
        rating.innerText = elem.rating + "⭐";

        let imgDiv = document.createElement("div");
        imgDiv.append(img);

        let dataDiv = document.createElement("div");
        dataDiv.append(name, date, rating);

        mainDiv.append(imgDiv, dataDiv);
        document.getElementById("movies").append(mainDiv);
    })

}

showMovies(movieData);
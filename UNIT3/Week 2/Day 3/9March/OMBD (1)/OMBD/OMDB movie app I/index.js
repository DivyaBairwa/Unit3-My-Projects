function get() {
    let movie = document.getElementById("search").value;
    let url = `https://www.omdbapi.com/?s=${movie}&apikey=50cf57bd`;
    console.log(url);

    async function getData() {
      let res = await fetch(url);
      let data = await res.json();
      let movieData = data.Search;
      console.log(movieData);
      displayMovie(movieData);
    }

    getData();

    function displayMovie(data) {
      let container = document.getElementById("display");
      display.innerHTML = null;
      let error = document.getElementById("error");
      error.innerHTML = null;

      data.map(function (elem) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = elem.Poster;
        img.alt = "Movie Poster";

        let title = document.createElement("h3");
        title.innerText = elem.Title;

        let year = document.createElement("p");
        year.innerText = `Year: ${elem.Year}`;

        let type = document.createElement("p");
        type.innerText = `Type: ${elem.Type}`;

        div.append(img, title, year, type);
        container.append(div);
      });
    }
  }
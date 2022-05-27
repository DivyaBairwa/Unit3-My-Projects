//  Youtube API  ==>  read documentation
// array of product
// append
// finding the url

// API_Id ==> AIzaSyDqhAbvzEcqSTP0303vTcUtuC1t7g9GJWo
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=football&key=YOUR_API_KEY
// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=football&key=AIzaSyDqhAbvzEcqSTP0303vTcUtuC1t7g9GJWo




const search_results_div = document.getElementById("search_results");

const searchVideos = async () => {
  try {
    let inp = document.getElementById("search").value;

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyCsJopUuILvBhXMVMmkg6bSSxJcIhEFSeM&maxResults=50`
    );

    let data = await res.json();

    let videos = data.items;

    appendVideos(videos);
    // return videos;

    console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }
};

// Possible Mistakes :-

// 1. async await not in pair
// 2. https
// 3. res.json()
// 4. separate params using &
// 5. wrong destination
// 6. spelling mistake

const appendVideos = (data) => {
  search_results_div.innerHTML = null;

  try {
    data.forEach(({ snippet : { title }, id: { videoId } }) => {
      let div = document.createElement("div");

      let titles = document.createElement("p");
      titles.innerText = title;

      let iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.height = "100%";
      iframe.width = "100%";
      iframe.allow = "fullscreen";

      div.append(iframe, title);

      search_results_div.append(div);
    });
  } catch (err) {
    console.log("err:", err);
  }
};

// embed ==> adding something
// do you want to embed a video to your app?
// i want to embed my video
// embed ==> https://www.youtube.com/embed/fLEhirbW3RM

const base_URL = "https://api.themoviedb.org/3"
const api_key = "?api_key=1cb0f23eb9774f53a3ad114e334ff695"
const image_URL = "https://image.tmdb.org/t/p/w185"

$.getJSON(base_URL + "/movie/"  + movie_id + api_key)
.then(data => {
    console.log(data)

$("main")
// console.log(data)
.append(`<h1 class="movie-title">${data.title}</h1>`)
.append(`<img class="movie-poster" src="${image_URL + data.poster_path}" alt="">`)
.append(`<p class="movie-overview">${data.overview}</p>`)

  })
  
.catch(err => {
    console.log(err)
  })

  //pushing
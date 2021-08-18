const base_URL = "https://api.themoviedb.org/3"
const api_key = "?api_key=1cb0f23eb9774f53a3ad114e334ff695"
const image_URL = "https://image.tmdb.org/t/p/w185"

function getMovies(page) {
  $.getJSON(base_URL + "/discover/movie" + api_key + "&page=" + page)
    .then(data => {
      console.log(data)

      const movies = data.results
      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i]
        const movieHTML = $("<div>", { class: "movie-tile" })
          .append(`<h5 class="movie-title">${movie.title}`)
          .append(`<p class="ave-rating">Overall rating (# votes):</p>`)
          .append(
            `<img src="${image_URL + movie.poster_path}" alt="${movie.title
            } poster">`
          )

        $("#insert-here").append(movieHTML)
      }
    })
    .catch(err => {
      console.log(err)
      $("#insert-here").append(`<p>${err.responseJSON.status_message}</p>`)
    })
}
let page = 1
getMovies(page)

if (page = 1) {
  $("#previous-page").hide()
}

$("#next-page").click(() => {
  page = page + 1
  if (page > 1) {
    $("#previous-page").show()
  }
  $("#insert-here").empty()
  getMovies(page)
})

$("#previous-page").click(() => {
  page = page - 1
  if (page < 2) {
    $("#previous-page").hide()
  }
  $("#insert-here").empty()
  getMovies(page)
})

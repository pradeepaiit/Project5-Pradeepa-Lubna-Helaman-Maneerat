const base_URL = "https://api.themoviedb.org/3"
const api_key = "?api_key=1cb0f23eb9774f53a3ad114e334ff695&with_genres="
const image_URL = "https://image.tmdb.org/t/p/w185"

$.getJSON(base_URL + "/discover/movie" + api_key + 80)//Filter movies for Crime movies
  .then(data => {
    console.log(data)

    const movies = data.results
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i]
        const movieHTML = $("<div>", { class: "movie-tile" })
          .append(`<h5 class="movie-title">${movie.title}`)
          .append(
            `<a href="/movie/${movie.id}"><img src="${image_URL + movie.poster_path}" alt="${movie.title
            } poster">`
          )
          $.get(`http://localhost:5000/rating/${movie.id}`, function (data) {
            console.log(data)
            if (data.avg) {
              $(movieHTML).append(`<p class="ave-rating"><span class="fa fa-star checked"></span>&nbsp(${data.avg}) from ${data.count} users</p>`)
          
            }else {
              $(movieHTML).append(`<p class="ave-rating"><span class="fa fa-star checked"></span>&nbsp(0.0) from 0 users</p>`)
            }
          });
        $("#insert-here").append(movieHTML)
    }
  })
  .catch(err => {
    console.log(err)
    $("#insert-here").append(`<p>${err.responseJSON.status_message}</p>`)
  })
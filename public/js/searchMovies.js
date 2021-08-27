const base_URL = "https://api.themoviedb.org/3"
const api_key = "?api_key=1cb0f23eb9774f53a3ad114e334ff695&with_genres="
const image_URL = "https://image.tmdb.org/t/p/w185"

// Search movie
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    e.preventDefault();
    console.log($('#searchTextHere').val());
    let searchText = $('#searchTextHere').val();
    getSearchMovies(searchText);
  });
});

function getSearchMovies(searchText) {
$.getJSON(base_URL + "/search/movie" + api_key + "&query=" + searchText)
  .then(data => {
    console.log(data)
    
    $("#insert-here").empty();
    
    const movies = data.results
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i]
        const movieHTML = $("<div>", { class: "movie-tile" })
          .append(`<h5 class="movie-title">${movie.title}`)
          .append(`<p class="ave-rating"><span class="fa fa-star checked"></span>&nbsp( ) from # votes</p>`)
          .append(
            `<a href="/movie/${movie.id}"><img src="${image_URL + movie.poster_path}" alt="${movie.title
            } poster">`
          )
          
        $("#insert-here").append(movieHTML);
        
    }
  })
  .catch(err => {
    console.log(err)
    $("#insert-here").append(`<p>${err.responseJSON.status_message}</p>`)
  })
}



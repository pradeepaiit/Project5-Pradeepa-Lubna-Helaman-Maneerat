const base_URL = "https://api.themoviedb.org/3"
const api_key = "?api_key=1cb0f23eb9774f53a3ad114e334ff695"
const image_URL = "https://image.tmdb.org/t/p/w185"

$.getJSON(base_URL + "/movie/"  + movie_id + api_key)
.then(data => {
    console.log(data)

$("main")
// console.log(data)
.prepend(`<p class="movie-overview">${data.overview}</p>`)
.prepend(`<img class="movie-poster" src="${image_URL + data.poster_path}" alt="">`)
.prepend(`<h1 class="movie-title">${data.title}</h1>`)


  })
  
.catch(err => {
    console.log(err)
  })
$("form").submit(e => {
  e.preventDefault()

$.ajax({
  method: "POST",
  url: "/movie/" + movie_id,
  data:{
rating: $("#rating").val()
  }
})
.done(()=>{
  console.log("Inserted into movieclub database successfully")
})

.fail(()=>{
  console.log("Insertion failed")
  $(".error").remove()
      $("main").append("<p class='error'>" + err.statusText + "</p>")
})
})


const base_URL = "https://api.themoviedb.org/3"
const api_key = "?api_key=1cb0f23eb9774f53a3ad114e334ff695"
const image_URL = "https://image.tmdb.org/t/p/w185"

$.getJSON(base_URL + "/movie/"  + movie_id + api_key)
.then(data => {
    console.log(data)

$("main")
// console.log(data)
.prepend(`<p class="movie-overview">${data.overview}</p>`)
.prepend(`<p class="averating"></p>`)
.prepend(`<img class="dmovie-poster" src="${image_URL + data.poster_path}" alt="">`)
.prepend(`<h1 class="dmovie-title">${data.title}</h1>`)

$.get(`http://localhost:5000/rating/${data.id}`, function (data) {
    console.log(data)
    if (data.avg) {
      $(".averating").prepend(`<p class="ave-rating"><span class="fa fa-star checked"></span>&nbsp(${data.avg}) from ${data.count} users</p>`)
  
    }else {
      $(".averating").prepend(`<p class="ave-rating"><span class="fa fa-star checked"></span>&nbsp(0.0) from 0 users</p>`)
    }
  });
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

const topRatesApi = "http://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=07df55c2a008a76039b5e2e7c8900ed4";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";



function getMovies(url){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showTopMovies(data.results);
        })
}

getMovies(topRatesApi);
   

function showTopMovies(movies){
   
    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview, release_date} = movie;
        var imgUrl = IMGPATH + poster_path;
        if (poster_path===null){
            imgUrl = "https://picsum.photos/150/225";
        }
        console.log(imgUrl);
        
        const movieEl = document.createElement("div");
        movieEl.classList.add("item","col-2");
        movieEl.innerHTML = `
               
                    <img
                        class="movie_img"
                        src = "${imgUrl}"
                        alt="${title}"
                    />
                
                    <div class="movie_info">
                        <h4 data-toggle="tooltip" title="${overview}">${title}</h4>
                        <div class="movie_vote">
                            ${vote_average + "/10"}
                            <i class="fas fa-star"></i>
                        </div>
                        
                    </div>
               
            
        `;
        top_rates_main.appendChild(movieEl);
        
        
    });
    

}



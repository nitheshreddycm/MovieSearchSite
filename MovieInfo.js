function myFunction(){
    
    var inputs= document.getElementById("movieSearch").value;

var movieData= fetch('http://www.omdbapi.com/?t='+inputs+' &y=&plot=short&r=json');
    
    var movieList;

movieData.then(data=>data.json())
    .then(data2=> updateDom(data2));

           function updateDom(data) {
    movieList = data;
var resultDom= 
        `Movie Name: <span> ${movieList.Title}</span>
Director: <span> ${movieList.Director}</span>
Release Year: <span>${movieList.Year}</span>
Runtime: <span>${movieList.Runtime}</span>
Genre: <span>${movieList.Genre}</span>
Actors: <span>${movieList.Actors}</span>
Language: <span>${movieList.Language}</span> 
IMDB Rating: <span>${movieList.imdbRating}</span>`;
           

    if(inputs){
document.getElementById("movieInfo").innerHTML=resultDom;
    
document.getElementById("poster").src=  movieList.Poster;
    }else{
 document.getElementById("movieInfo").style.display = "none";
    document.getElementById("poster").style.display = "none";
//    location.reload();  
    };
           }
}



import React,{useState} from "react";
import MovieDetails from "./MovieDetails";
import {createRoot} from 'react-dom/client';



 const MovieList=(props)=>{
  
 
  
 
  //Function Detail - Load the movie details based on the user's selection
  
   const handleClick=(title,i,year)=>async()=>
     {
        var list;
        var url='http://www.omdbapi.com/?t='+title+'&y='+year+'&apikey=3f3a9c5b';
        const response=   await fetch(url);
        var responseJson =  await response.json();
       
        const rootElement = document.getElementById('moviedetails');
        const root =createRoot(rootElement)
        root.render(<MovieDetails movies={responseJson}/>)
       
        list=document.querySelectorAll('.movieItem');
        
        for(var j=0;j<list.length;j++)
        {
         list.item(j).className='movieItem'
        }
        document.getElementsByClassName('movieItem').item(i).className='movieItem selectedList'
        
     }
     
   
   

       return(
              <>
                {
                  props.movies.map((movie,index)=>
                  (
                    <>
                   
                    <div className="movieItem"  id={index}   onClick={handleClick(movie.Title,index,movie.Year)}>
                    <input  hidden className="movieType" value={movie.Type} id="movieType"/>
                    <img  className="movieImage" src={movie.Poster} alt="Movie"></img>
                    <span className="movieListTitle">
                    {movie.Title} 
                    </span>
                        <span className="movieListYear" id="movieListYear">
                    {movie.Year}  
                      </span>
                    </div>
                  </>
))}


</>
)
    
} 



export default MovieList;
import React, { useState } from 'react'
import MovieCard from './MovieCard';
import ReactStars from "react-rating-stars-component";
import AddModal from './AddModal';


function MovieListe() {
    
const [Liste, setListe] = useState
    (
        [
        {
    
        name:'Superman Vs Batman',
        image:"https://i.pinimg.com/736x/60/c0/9e/60c09e3183cdd9672f8589bfa5cdf2fe.jpg",
        rating:4,
        year:2016,
        overview:"It's been nearly two years since Superman's (Henry Cavill) colossal battle with Zod (Michael Shannon) devastated the city of Metropolis. The loss of life and collateral damage left many feeling angry and helpless, including crime-fighting billionaire Bruce Wayne (Ben Affleck). Convinced that Superman is now a threat to humanity, Batman embarks on a personal vendetta to end his reign on Earth, while the conniving Lex Luthor (Jesse Eisenberg) launches his own crusade against the Man of Steel"
        },
        {
          
          name:'Venom',
          image:"https://cdnb.artstation.com/p/assets/images/images/011/694/837/large/editician-zone-editician-zone-113.jpg?1530897875",
          rating:3,
          year:2021,
          overview:"Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror"
          },
          {
            
            name:'Blade Runner 2049',
            image:"https://m.media-amazon.com/images/I/71NPmBOdq7L._AC_SL1333_.jpg",
            rating:5,
            year:2017,
            overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years"
            },

            {
            
              name:'Witcher',
              image:"https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
              rating:1,
              year:2021,
              overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years"
              },

              {
            
                name:'Breaking bad',
                image:"https://www.themoviedb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
                rating:5,
                year:2008,
                overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years"
                },

                {
            
                  name:'Sopranos',
                  image:"https://m.media-amazon.com/images/I/612qRKpx5VL._AC_SY679_.jpg",
                  rating:5,
                  year:1999,
                  overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years"
                  },

                  {
            
                    name:'Better call saul',
                    image:"https://cdn.europosters.eu/image/750/posters/better-call-saul-paint-i47519.jpg",
                    rating:2,
                    year:2014,
                    overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years"
                    },

                    {
            
                      name:'Dexter new blood',
                      image:"https://sportshub.cbsistatic.com/i/2021/10/02/a3cd02ef-77da-44f9-9e1f-275eda96246f/dexter-new-blood-poster.jpg?auto=webp&width=640&height=800&crop=0.8:1,smart",
                      rating:1,
                      year:2021,
                      overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years"
                      },

                      {
            
                        name:'The Dark Knight Rises',
                        image:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
                        rating:4,
                        year:2012,
                        overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years"
                        },

                        {
            
                          name:'True Detective',
                          image:"https://i.pinimg.com/originals/1c/ab/30/1cab30ca0cd90a6ce7e92d7c191d0714.jpg",
                          rating:5,
                          year:2014,
                          overview:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former blade runner who's been missing for 30 years"
                          },
          
          ],
        
          
          );
    
    const [text, settext] = useState("");
    const [rate, setrate] = useState(1);
    const rateChanged=(newrate)=>{
        setrate(newrate)
    };

    const addMovie=(newfilm)=> {setListe([...Liste,newfilm])}
    return (
    <div className='all'>
     <div className="filter">
     <div className="titlee"> <h1>Movie App</h1> </div>

     <div className="nav2">


<div class="form-outline" className='inputt'>
<input type="search" id="form1" class="form-control" placeholder="Quick Search"
 aria-label="Search" onChange={(e)=> settext(e.target.value)} />
</div>


    <div className="stars">
    <ReactStars
    count={5}
    onChange={rateChanged}
    size={24}
    activeColor="#ffd700"
  />
  </div>
  <AddModal addMovie={addMovie} />
  </div>
        </div>

        <div className='liste'>
            {Liste
            .filter((el=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate))
            .map((el)=>(<MovieCard movie={el}/>))
            
            }
            
        </div>
        </div>
    );
}

export default MovieListe;

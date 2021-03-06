import React from 'react'
import {Card,Button} from "react-bootstrap"
import ReactStars from "react-rating-stars-component";


function MovieCard({movie}) {
    
  return (
      
  <div className='cardmovie'>
  <Card style={{ width: '200px' , hight:'150px' }}>
  <Card.Img variant="top" src={movie.image} className='movieimage'/>
  <Card.Body>
    <div className="cardbodyy">
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>{movie.year}</Card.Text>
  <div className="starscard">
    <ReactStars
    count={5}
    //onChange={ratingChanged}
    value={movie.rating}
    size={24}
    activeColor="#ffd700"
    edit={false}
  />
  </div>
</div>
</Card.Body>
</Card>
        </div>
      
    )
}

export default MovieCard

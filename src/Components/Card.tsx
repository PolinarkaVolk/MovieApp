import React from "react";
import {Movie} from "./Main";

type CardProps = {
    movie: Movie;
};

const Card = ({ movie }: CardProps) => {
    const { imdbID, Year, Poster, Title, Type } = movie;

    return <>
        <div className='movie' key={imdbID}>
            <img src={Poster !== 'N/A'? Poster:"https://via.placeholder.com/400"} alt={Title} className='poster'></img>
            <div className='movie-details'>
                    <h4 className='title'>{Title}</h4>
                    <div className='description'>
                        <p className='year'>{Year}</p>
                        <p className='movie_category'>{Type}</p>
                    </div>


            </div>
        </div>
    </>
}
export default Card;
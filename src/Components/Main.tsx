import Card from "./Card";
import { useEffect, useState } from "react";

let API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=49abbafb";

const Main = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState("");

    useEffect(() => {
        searchMovies('Batman')

    }, [])
    const searchMovies = async (title: string) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };
    useEffect(() => {
        if (genre) {
            searchMoviesByGenre(genre);
        }
    }, [genre]);
    const searchMoviesByGenre = async (genre: string) => {
        const response = await fetch(`${API_URL}&s=${genre}`);
        const data = await response.json();
        setMovies(data.Search);
    };
    return <>
        <div className='header'>
            <nav>
                <ul>
                    <li><a href='#' onClick={() => setGenre("movie")}>Фильмы</a></li>
                    <li><a href='#' onClick={() => setGenre("animation")}>Мультфильмы</a></li>
                    <li><a href='#' onClick={() => setGenre("series")}>Сериалы</a></li>
                </ul>
            </nav>
            <form>
                <div className="search-btn">
                    <input type="text" className="inputText"
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           placeholder="Введите название"
                    />
                    <button onClick={() => searchMovies(searchTerm)}><i className="fa fa-search" ></i></button>
                </div>
            </form>
        </div>

        {movies?.length > 0 ? (
            <div className="container">
                {
                    movies.map((movie: Movie) => (<Card  movie={movie} key={movie.imdbID} />))
                }
            </div>
        ) : (
            <div className='empty'>
                <h2>No movies found</h2>
            </div>
        )}


    </>
}
export type Movie = {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export default Main
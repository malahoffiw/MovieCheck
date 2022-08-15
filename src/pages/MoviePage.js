import React from 'react';
import { useParams } from "react-router-dom";
import MovieFullInfo from "../components/MovieFullInfo/MovieFullInfo";

const MoviePage = ({setIsOpen}) => {
    const { movieId } = useParams()

    return (
        <main className="moviePage" onClick={() => setIsOpen(false)}>
            <MovieFullInfo movieId={movieId}/>
        </main>
    );
};

export default MoviePage;
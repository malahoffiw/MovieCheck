import React, { useContext } from 'react';
import {Context} from "../Context";
import FavoriteMovie from "../components/FavoriteMovie/FavoriteMovie";

const Favorites = ({setIsOpen}) => {
    const {favoriteMovies} = useContext(Context)
    const favoriteMoviesElements = favoriteMovies.map(movie => (
        <FavoriteMovie key={movie.kinopoiskId} movie={movie} />
    ))

    return (
        <main className="favorites-page" onClick={() => setIsOpen(false)}>
            <h1 className="favorites-page-title">Мое избранное</h1>
            {favoriteMoviesElements}
        </main>
    );
};

export default Favorites;
import React, { useContext } from 'react';
import { Context } from "../Context";
import FavoriteMovie from "../components/FavoriteMovie/FavoriteMovie";

const Favorites = ({setIsOpen}) => {
    const {favoriteMovies} = useContext(Context)
    const favoriteMoviesElements = favoriteMovies.map(movie => (
        <FavoriteMovie key={movie.kinopoiskId} movie={movie} />
    ))

    return (
        <main className="favoritesPage" onClick={() => setIsOpen(false)}>
            <h1 className="favoritesPageTitle">Мое избранное</h1>
            <div className="favoritesPageElements">
                {favoriteMoviesElements}
            </div>
        </main>
    );
};

export default Favorites;
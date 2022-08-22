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
                {favoriteMovies.length > 0 ? favoriteMoviesElements : (
                    <p className="emptyLabel">Здесь пока ничего нет...</p>
                )}
            </div>
        </main>
    );
};

export default Favorites;
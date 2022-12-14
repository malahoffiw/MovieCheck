import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import { Context } from "../Context";

const Main = ({setIsOpen}) => {
    const { movies, serials, favoriteMovies, setMainPage } = useContext(Context)

    return (
        <main className="mainPage" onClick={() => setIsOpen(false)}>
            <div>
                <Link
                    to="/movies"
                    className="mainPageLink"
                    onClick={() => {
                        setMainPage('movies')
                        setIsOpen(false)
                    }}
                >
                    <h2>Новые фильмы</h2>
                </Link>
            </div>
            {
                movies.length > 0
                    ? <NewsSlider items={movies}/>
                    : <span className="loader"></span>
            }
            <div>
                <Link
                    to="/movies"
                    className="mainPageLink"
                    onClick={() => {
                        setMainPage('serials')
                        setIsOpen(false)
                    }}
                >
                    <h2>Новые сериалы</h2>
                </Link>
            </div>
            {
                serials.length > 0
                    ? <NewsSlider items={serials}/>
                    : <span className="loader"></span>
            }
            <div>
                <Link
                    to="/favorites"
                    className="mainPageLink"
                    onClick={() => {
                        setIsOpen(false)
                    }}
                >
                    <h2>Избранное</h2>
                </Link>
            </div>
            <NewsSlider items={favoriteMovies} />
        </main>
    );
};

export default Main;
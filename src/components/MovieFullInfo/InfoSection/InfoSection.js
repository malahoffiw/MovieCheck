import React from 'react';
import classes from "./InfoSection.module.scss";
import getNoun from "../../../utils/getNoun";
import toHoursAndMinutes from "../../../utils/toHoursAndMinutes";

const InfoSection = ({ movieInfo, movieStaff, moviePremiere, movieBoxOffice }) => {
    const votesNouns = ["оценка", "оценки", "оценок"]
    const kinopoiskVotes = movieInfo.ratingKinopoiskVoteCount + ' ' + getNoun(movieInfo.ratingKinopoiskVoteCount, votesNouns)
    const imdbVotes = movieInfo.ratingImdbVoteCount + ' ' + getNoun(movieInfo.ratingImdbVoteCount, votesNouns)
    const countries = movieInfo.countries.map(country => `${country.country}`).join(', ')
    const genres = movieInfo.genres.map(genre => ` ${genre.genre}`).slice(0, 3).join(', ')
    const actors = movieStaff.actors.map(actor => <p key={actor.name}>{actor.name}</p>)

    const length = movieInfo.filmLength
        ? `${movieInfo.filmLength} мин. / ${toHoursAndMinutes(movieInfo.filmLength)}`
        : "-"
    const ageLimit = movieInfo.ratingAgeLimits
        ? movieInfo.ratingAgeLimits.replace(/\D*(\d+)/, '$1+')
        : "-"

    return (
        <div className={classes.info}>
            <div className={classes.title}>
                <h1>{movieInfo.nameRu} ({movieInfo.year})</h1>
                <p>{movieInfo.nameOriginal}</p>
            </div>
            <div className={classes.rating}>
                <div className={classes.ratingLine}>
                    <p>Кинопоиск:</p>
                    <h3>{movieInfo.ratingKinopoisk}</h3>
                    <small>({kinopoiskVotes})</small>
                </div>
                <div className={classes.ratingLine}>
                    <p>IMDB:</p>
                    <h3>{movieInfo.ratingImdb}</h3>
                    <small>({imdbVotes})</small>
                </div>
            </div>
            <div className={classes.fullInfo}>
                <h2>О фильме</h2>
                <>
                    <p className={classes.fullInfoKey}>Год производства</p>
                    <p>{movieInfo.year}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Страна</p>
                    <p>{countries}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Жанр</p>
                    <p>{genres}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Слоган</p>
                    <p>
                        {movieInfo.slogan ? `"${movieInfo.slogan}"` : '-'}
                    </p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Бюджет</p>
                    <p>{movieBoxOffice[0] === "" ? "-" : movieBoxOffice[0]}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Сборы в мире</p>
                    <p>{movieBoxOffice[1] === "" ? "-" : movieBoxOffice[1]}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Мировая премьера</p>
                    <p>{moviePremiere[0] === "" ? "-" : moviePremiere[0]}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Цифровая премьера</p>
                    <p>{moviePremiere[1] === "" ? "-" : moviePremiere[1]}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Возраст</p>
                    <p>{ageLimit}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Рейтинг MPAA</p>
                    <p>{movieInfo.ratingMpaa ? movieInfo.ratingMpaa.toUpperCase() : "-"}</p>
                </>
                <>
                    <p className={classes.fullInfoKey}>Длительность</p>
                    <p>{length}</p>
                </>
            </div>
            <div className={classes.staff}>
                <h2>Съемочная группа</h2>
                <div className={classes.staffKey}>
                    <h5>Режиссер</h5>
                    <h5>Сценарий</h5>
                    <h5>Оператор</h5>
                </div>
                <div>
                    <p>{movieStaff.director.name}</p>
                    <p>{movieStaff.writer.name}</p>
                    <p>{movieStaff.operator.name}</p>
                </div>
                <h5>В главных ролях</h5>
                <div className={classes.actors}>
                    {actors}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;

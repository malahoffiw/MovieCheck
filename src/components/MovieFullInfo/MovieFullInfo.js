import React from 'react';
import useMovieInfo from "../../hooks/useMovieInfo";

const MovieFullInfo = ({movieId}) => {
    const [movieInfo, movieFacts, movieStaff] = useMovieInfo(movieId)

    /*
    INFO
        countries: (2) [{…}, {…}]
        description: "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха."
        filmLength: 113
        genres: (3) [{…}, {…}, {…}]
        imdbId: "tt8367814"
        kinopoiskId: 1143242
        nameOriginal: "The Gentlemen"
        nameRu: "Джентльмены"
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/1143242.jpg"
        ratingAgeLimits: "age18"
        ratingFilmCritics: 6.5
        ratingFilmCriticsVoteCount: 276
        ratingImdb: 7.8
        ratingImdbVoteCount: 325569
        ratingKinopoisk: 8.5
        ratingKinopoiskVoteCount: 1091174
        ratingMpaa: "r"
        serial: false
        type: "FILM"
        webUrl: "https://www.kinopoisk.ru/film/1143242/"
        year: 2019

    FACTS
        0: {text: 'Когда Майкл возвращается в паб, снаружи зритель ви…таким названием владеет режиссёр фильма Гай Ричи.', type: 'FACT', spoiler: false}
        1: {text: '<a href="/name/8090/" class="all">Хью Грант</a> и …/a> ни разу не встретились на съемочной площадке.', type: 'FACT', spoiler: true}
        2: {text: 'Ближе к концу фильма герой <a href="/name/8090/" c…s="all">Гай Ричи</a>, и в котором он тоже сыграл.', type: 'FACT', spoiler: true}
        3: {text: 'В начале фильма Розалинд Пирсон (<a href="/name/10…о в офисе видно, что у её туфель светлые подошвы.', type: 'BLOOPER', spoiler: false}
        4: {text: 'Когда Рей забегает в подворотню в погоне за парнем…ах погони видно, что у Рея под плащом ничего нет.', type: 'BLOOPER', spoiler: false}
        5: {text: '<a href="/name/8090/" class="all">Хью Грант</a> и …а это время произнесли более 40 страниц диалогов.', type: 'FACT', spoiler: false}

    STAFF
        actors: Array(5)
            0: {type: 'Актер', name: 'Мэттью МакКонахи', photo: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/797.jpg'}
            1: {type: 'Актер', name: 'Чарли Ханнэм', photo: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/38702.jpg'}
            2: {type: 'Актер', name: 'Генри Голдинг', photo: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/4950097.jpg'}
            3: {type: 'Актер', name: 'Хью Грант', photo: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/8090.jpg'}
            4: {type: 'Актер', name: 'Мишель Докери', photo: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/1067193.jpg'}
        director: {type: 'Режиссер', name: 'Гай Ричи', photo: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/45159.jpg'}
        operator: {type: 'Оператор', name: 'Алан Стюарт', photo: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/643927.jpg'}
        writer: {type: 'Сценарист', name: 'Гай Ричи', photo: 'https://kinopoiskapiunofficial.tech/images/actor_posters/kp/45159.jpg'}
     */

    return (
        <div >
            {/* вывести все полученное красиво!*/}
        </div>
    );
};

export default MovieFullInfo;
import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import store from "store";
import classes from "./MovieFullInfo.module.scss";
import InfoSection from "./InfoSection/InfoSection";
import DescriptionSection from "./DescriptionSection/DescriptionSection";
import PosterSection from "./PosterSection/PosterSection";
import fetchMovieInfo from "../../services/fetchMovieInfo";
import parsePremiere from "../../utils/parsePremiere";
import parseBoxOffice from "../../utils/parseBoxOffice";
import parseStaff from "../../utils/parseStaff";

const MovieFullInfo = ({movieId}) => {
    const [response, setResponse] = useState(store.get(`movie${movieId}`) || [])
    const { isFetching } = useQuery(
        ['movieInfoData', movieId],
        () => fetchMovieInfo(movieId),
        { onSuccess: data => {
                setResponse(data)
                store.set(`movie${movieId}`, data)
                }, enabled: !store.get(`movie${movieId}`) }
    )

    if (isFetching) return (
        <div className={classes.loader}></div>
    )

    if (response.length === 0) return ""

    return (
        <div className={classes.moviePageBlock}>
            <PosterSection
                movieInfo={response[0].data}
            />
            <InfoSection
                movieInfo={response[0].data}
                movieStaff={parseStaff(response[2].data)}
                moviePremiere={parsePremiere(response[3].data.items)}
                movieBoxOffice={parseBoxOffice(response[4].data.items)}
            />
            <DescriptionSection
                movieInfo={response[0].data}
                movieFacts={response[1].data.items}
            />
        </div>
    );
};

export default MovieFullInfo;
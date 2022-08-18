import React from 'react';
import { useQuery } from "@tanstack/react-query";
import classes from "./MovieFullInfo.module.scss";
import InfoSection from "./InfoSection/InfoSection";
import DescriptionSection from "./DescriptionSection/DescriptionSection";
import PosterSection from "./PosterSection/PosterSection";
import fetchMovieInfo from "../../services/fetchMovieInfo";
import parsePremiere from "../../utils/parsePremiere";
import parseBoxOffice from "../../utils/parseBoxOffice";
import parseStaff from "../../utils/parseStaff";

const MovieFullInfo = ({movieId}) => {
    const { isLoading, data: response, error } = useQuery(
        ['movieInfoData', movieId],
        () => fetchMovieInfo(movieId),
        { enabled: !!movieId }
    )

    // treat in more detail
    if (isLoading) return ""

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
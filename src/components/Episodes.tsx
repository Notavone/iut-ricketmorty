import {useEffect, useState} from "react";
import {Episode} from "../models/Episode";
import {getEpisodes} from "../services/api";
import {EpisodeAccordion} from "./EpisodeAccordion";
import {Typography} from "@mui/material";

export function Episodes(): JSX.Element {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    useEffect(() => {
        getEpisodes().then((response) => setEpisodes(response));
    }, []);

    return (
        <>
            <Typography variant={"h3"} m={2}>Liste des épisodes</Typography>
            {episodes.map((episode) => <EpisodeAccordion episode={episode}/>)}
        </>
    )
}

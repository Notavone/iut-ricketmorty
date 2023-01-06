import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {Episode} from "../models/Episode";
import {ExpandMore} from "@mui/icons-material";
import {EpisodeListePersonnage} from "./EpisodeListePersonnage";

interface EpisodeAccordionProps {
    episode: Episode;
}

export function EpisodeAccordion(
    props: EpisodeAccordionProps
): JSX.Element {
    return <Accordion disableGutters={true}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
            {props.episode.episode} - {props.episode.name}
        </AccordionSummary>
        <AccordionDetails>
            <div>Date de sortie : {new Date(props.episode.air_date).toLocaleDateString("fr-FR")}</div>
            <div>Nombre de personnages : {props.episode.characters.length}</div>
            <EpisodeListePersonnage personnages={props.episode.characters}/>
        </AccordionDetails>
    </Accordion>
}

import {useEffect, useState} from "react";
import {Character} from "../models/Character";
import {getCharacterByLink} from "../services/api";
import {PersonnageCarte} from "./PersonnageCarte";
import {Button, Divider, Grid} from "@mui/material";

interface EpisodeListePersonnageProps {
    personnages: string[];
}

export function EpisodeListePersonnage(
    props: EpisodeListePersonnageProps
): JSX.Element {
    const [personnages, setPersonnages] = useState<Character[]>([]);
    const [afficherPersonnages, setAfficherPersonnages] = useState(false);

    useEffect(() => {
        Promise.all(props.personnages.map((personnage) => getCharacterByLink(personnage))).then((response) => setPersonnages(response));
    }, [props.personnages, afficherPersonnages]);

    return <>
        <Button variant="outlined" onClick={() => setAfficherPersonnages(!afficherPersonnages)}>
            {afficherPersonnages ? "Masquer" : "Afficher"} les personnages
        </Button>

        {afficherPersonnages && <>
            <Grid mb={2}/>
            <Divider/>
            <Grid container spacing={2} mt={1} justifyContent="center">
                {personnages.map((personnage) => {
                    return <Grid item key={personnage.id}>
                        <PersonnageCarte character={personnage}/>
                    </Grid>
                })}
            </Grid>
        </>}
    </>
}

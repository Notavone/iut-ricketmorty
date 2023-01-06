import {ReactNode, useEffect, useState} from "react";
import {getCharacters} from "../services/api";
import {PersonnageCarte} from "./PersonnageCarte";
import {Character} from "../models/Character";
import {getRandomAmount} from "../services/utils";
import {Grid, Typography} from "@mui/material";
import {useFavoris} from "../services/useFavoris";

export function Index(): ReactNode {
    const [characters, setCharacters] = useState<Character[]>([] as Character[]);
    const {favoris} = useFavoris();
    useEffect(() => {
        getCharacters().then((response) => setCharacters(response));
    }, []);

    return (
        <>
            <Typography variant="h3" m={2}>Personnages aléatoires</Typography>
            <Grid container spacing={2} justifyContent="center">
                {getRandomAmount(characters, 5).map((character) => {
                    return <Grid item key={character.id}>
                        <PersonnageCarte character={character}/>
                    </Grid>
                })}
            </Grid>
            <Typography variant="h3" m={2}>Personnages favoris</Typography>
            <Grid container spacing={2} justifyContent="center">
                {characters.filter((character) => favoris.includes("" + character.id))
                    .reverse().slice(0, 5).map((character) => {
                            return <Grid item key={character.id}>
                                <PersonnageCarte character={character}/>
                            </Grid>
                        }
                    )}
            </Grid>
        </>
    )
}

import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {useFavoris} from "../services/useFavoris";
import {Character} from "../models/Character";
import {useEffect, useState} from "react";
import {getCharacter} from "../services/api";
import {PersonnageCarte} from "./PersonnageCarte";
import {Link} from "react-router-dom";

export function Favoris(): JSX.Element {
    const {favoris} = useFavoris();
    const [favorisList, setFavorisList] = useState<Character[]>([] as Character[]);
    useEffect(() => {
        Promise.all(favoris.map((favori) => getCharacter(favori))).then((response) => setFavorisList(response));
    }, [favoris]);

    return <>
        <Typography variant={"h3"} m={2}>Liste des favoris</Typography>
        {!!favorisList.length && <Grid container spacing={2} justifyContent="center">
            {favorisList.map((favori) => {
                return <Grid item key={favori.id}>
                    <PersonnageCarte character={favori}/>
                </Grid>
            })}
        </Grid>}

        {!favorisList.length && <Card>
            <CardContent>
                <Typography variant={"h4"}>
                    Aucun favori !
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" component={Link} to={"/episodes"}>Voir la liste des épisodes</Button>
            </CardActions>
        </Card>}
    </>
}

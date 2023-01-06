import {Box, Card, CardActions, CardContent, Container, IconButton, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {Character} from "../models/Character";
import {useEffect, useState} from "react";
import {getCharacter} from "../services/api";
import {Circle, Favorite, FavoriteBorderOutlined} from "@mui/icons-material";
import {useFavoris} from "../services/useFavoris";

export function PersonnageFiche(): JSX.Element {
    const {id} = useParams();
    const [character, setCharacter] = useState<Character | null>(null);
    const {favoris, addFavori, removeFavori} = useFavoris();


    useEffect(() => {
        if (id) {
            getCharacter(id).then((response) => setCharacter(response));
        }
    }, [id]);

    return (
        <Container>
            <Box m={2}>
                <Card>
                    <CardContent>
                        <img src={character?.image} alt={character?.name}/>
                        <Typography variant="h5" gutterBottom component="div">
                            {character?.name}
                        </Typography>
                        <div>
                            <Circle color={character?.status === "Alive" ? "primary" : character?.status === "Dead" ? "error" : "disabled"}/>
                            {character?.status} - {character?.species}
                        </div>
                        <div>{character?.gender}</div>
                        <div>{character?.type}</div>
                        <div>Origine : {character?.origin?.name}</div>
                    </CardContent>
                    {character && <CardActions>
                        <IconButton
                            onClick={() => (favoris.includes("" + character.id) ? removeFavori("" + character.id) : addFavori("" + character.id))}>
                            {favoris.includes("" + character.id) ? <Favorite color="error"/> : <FavoriteBorderOutlined/>}
                        </IconButton>
                    </CardActions>}
                </Card>
            </Box>
        </Container>
    )
}

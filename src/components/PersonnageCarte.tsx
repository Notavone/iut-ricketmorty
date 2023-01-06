import {Character} from "../models/Character";
import {Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Circle, Favorite, FavoriteBorderOutlined} from "@mui/icons-material";
import {useFavoris} from "../services/useFavoris";

interface PersonnageCarteProps {
    character: Character;
}

export function PersonnageCarte(props: PersonnageCarteProps): JSX.Element {
    const {favoris, addFavori, removeFavori} = useFavoris();

    return <> {props.character && <Card>
        <CardMedia component="img" src={props.character.image} alt={props.character.name}></CardMedia>
        <CardContent>
            <Typography variant="h5" gutterBottom component="div">{props.character.name}</Typography>
            <div>
                <Circle color={props.character.status === "Alive" ? "primary" : props.character.status === "Dead" ? "error" : "disabled"}/>
                {props.character.status} - {props.character.species}
            </div>
        </CardContent>
        <CardActions>
            <Button component={Link} to={"/characters/" + props.character.id}>Voir la fiche</Button>
            <IconButton
                onClick={() => (favoris.includes("" + props.character.id) ? removeFavori("" + props.character.id) : addFavori("" + props.character.id))}>
                {favoris.includes("" + props.character.id) ? <Favorite color="error"/> : <FavoriteBorderOutlined/>}
            </IconButton>
        </CardActions>
    </Card>
    }</>
}

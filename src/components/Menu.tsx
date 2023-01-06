import {AppBar, MenuItem, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

export function Menu() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense" disableGutters>
                <MenuItem component={Link} to="/">Accueil</MenuItem>
                <MenuItem component={Link} to="/episodes">Episodes</MenuItem>
                <MenuItem component={Link} to="/favorites">Favoris</MenuItem>
            </Toolbar>
        </AppBar>
    )
}

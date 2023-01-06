import {Menu} from "./Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Index} from "./Index";
import {Episodes} from "./Episodes";
import {Favoris} from "./Favoris";
import {PersonnageFiche} from "./PersonnageFiche";

export function Router() {
    return (
        <BrowserRouter>
            <Menu/>

            <Routes>
                <Route path="/" element={Index()}></Route>
                <Route path="/episodes" element={<Episodes/>}></Route>
                <Route path="/characters/:id" element={<PersonnageFiche/>}></Route>
                <Route path="/favorites" element={<Favoris/>}></Route>
            </Routes>

        </BrowserRouter>
    );
}

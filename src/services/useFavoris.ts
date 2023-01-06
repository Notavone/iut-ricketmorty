import {useEffect, useState} from "react";

const getFavoris: () => string[] = () => {
    const cookieValue = document.cookie
        .split('; ')
        .find((row) => row.startsWith('favorites'))
        ?.split('=')[1] ?? "";
    return [...new Set(cookieValue.split(",").filter(f => f.length))];
};

export function useFavoris() {
    const [favoris, setFavoris] = useState(getFavoris());
    const addFavori = (id: string) => {
        setFavoris([...favoris, id]);
    }

    const removeFavori = (id: string) => {
        setFavoris(favoris.filter(f => f !== id));
    }

    useEffect(() => {
        document.cookie = `favorites=${favoris.join(",")};`;
    }, [favoris]);

    useEffect(() => {
        setFavoris(getFavoris());
    }, []);

    return {favoris, addFavori, removeFavori};
}

import {ApiResponse} from "../models/ApiResponse";
import {Character} from "../models/Character";
import {Episode} from "../models/Episode";

const apiUrl = "https://rickandmortyapi.com/api";

export async function getCharacters(): Promise<Character[]> {
    const characters: Character[] = [];
    let lien: string | null = apiUrl + "/character";
    while (lien) {
        const response: ApiResponse<Character[]> = await fetch(lien, {cache: "default"}).then((response) => response.json());
        characters.push(...response.results);
        lien = response.info.next;
    }

    return characters;
}

export async function getCharacter(id: string): Promise<Character> {
    return fetch(`${apiUrl}/character/${id}`, {cache: "default"}).then((response) => response.json());
}

export async function getCharacterByLink(link: string): Promise<Character> {
    return fetch(link, {cache: "default"}).then((response) => response.json());
}

export async function getEpisodes(): Promise<Episode[]> {
    const characters: Episode[] = [];
    let lien: string | null = apiUrl + "/episode";
    while (lien) {
        const response: ApiResponse<Episode[]> = await fetch(lien, {cache: "default"}).then((response) => response.json());
        characters.push(...response.results);
        lien = response.info.next;
    }

    return characters;
}

export async function getEpisode(id: string): Promise<Episode> {
    return fetch(`${apiUrl}/episode/${id}`, {cache: "default"}).then((response) => response.json());
}

import {Location} from "./Location";

export class Character {
    id!: number;
    name!: string;
    status!: "Alive" | "Dead" | "unknown";
    species!: string;
    type!: string;
    gender!: "Female" | "Male" | "Genderless" | "unknown";
    origin!: Location;
    location!: Location;
    image!: string;
    episode!: string[];
    url!: string;
    created!: string;
}

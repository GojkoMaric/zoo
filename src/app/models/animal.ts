import { Sector } from './sector';

export class Animal {
    species;
    name;
    dateOfBirth;
    sector: Sector;

    constructor(species, name, dateOfBirth, sector)
    {
        this.species=species;
        this.name=name;
        this.dateOfBirth=dateOfBirth;
        this.sector=sector;
    }
}

export class Pokemon {
    abilities: string[];
    id: string;
    name: string;
    sprites: {
        front_default: string
    };
    types: string[];

    constructor(id = '', name = '', abilities = [], sprites = {
        front_default: ''
    }, types =  []) {
        this.id = id;
        this.name = name;
        this.abilities = abilities;
        this.sprites = sprites;
        this.types = types;
    }
}
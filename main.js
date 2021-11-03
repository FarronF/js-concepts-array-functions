console.log('Hello from JS');
const pokemonArray = [
    { species: 'Squirtle', type1: 'Water', nickname:'Barry', level : 15},
    { species : 'Ivysuar', type1: 'Grass', type2:'Poison', nickname:'Suzie', level : 25},
    { species : 'Charizard', type1: 'Fire', type2:'Flying', nickname:'Jeff', level : 38},
    { species : 'Ditto', type1: 'Normal', nickname:'Cheryl', level : 18},
    { species : 'Eevee', type1: 'Normal', nickname:'Larry', level : 22},
    { species : 'Growlithe', type1: 'Fire', nickname:'Ted', level : 32},
    { species : 'Pidgey', type1: 'Flying', type2: 'Normal', nickname:'Jaice', level : 7},
]



printPokemonArray = (pokemonArray) => {
    descriptions = pokemonArray.map(pokemon => getPokemonDescription(pokemon))
    descriptions.forEach(description => console.log(description));
}

getPokemonDescription = ({species, type1, type2, nickname, level}) => {
    return `${nickname} is a level ${level} ${species} of type ${getType({type1, type2})}`;
};

getType = ( {type1, type2 = null} ) => {
    if(!!type2) {
        return `${type1}/${type2}`;
    }
    return `${type1}`;
}

getPokemonInLevelRange = ({minimum = 1, maximum = 100}) => {
    return pokemonArray.filter((pokemon) => pokemon.level >= minimum && pokemon.level <= maximum);
}

getPokemonOfType = type => {
    return pokemonArray.filter((pokemon) => [pokemon.type1, pokemon.type2].includes(type));
}


printPokemonArray(pokemonArray);

console.warn('Print pokemon level 30 and over');
const pokemonOverLevel30 = getPokemonInLevelRange({minimum: 30});
printPokemonArray(pokemonOverLevel30);

console.warn('Print flying type pokemon');
const flyingTypePokemon = getPokemonOfType('Flying');
printPokemonArray(flyingTypePokemon);
 
console.warn('List nicknames');
const nicknames = pokemonArray.map(pokemon => pokemon.nickname);
console.log(nicknames);


console.warn('Printing pokemon in order of level');
const orderedList = pokemonArray.sort((a, b) => a.level >= b.level ? 1 : -1);
printPokemonArray(orderedList);

console.warn('Totalling level')
const totalLevel = pokemonArray.reduce((total, pokemon) => {
    return total + pokemon.level;
}, 0)

console.log(totalLevel);

import heroes, {owners} from "../data/heroes"
//console.log(owners)

const getHeroesById = (id) => heroes.find((heroe) => heroe.id == id)

//console.log(getHeroesById(1));

const getHeroesByOwner = (owner) => heroes.filter((creador) => creador.owner == owner)
//console.log(getHeroesByOwner('DC'));

export {
    getHeroesById,
    getHeroesByOwner
}
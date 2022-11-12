import Dexie from "dexie";
import { PokemonModel } from "../model/Pokemon";

const db = new Dexie('pwa-pokemondb')

db.version(1).stores({
    pokemon: "++id,number",
})

db.open()

export class PokemonService {

    async loadData() {
        const promises = []
        for (let i = 1; i < 152; i++) {
            promises.push(this.fetchPokeData({ pokeNumber: i }))
        }
        const pokeList = await Promise.all(promises)
        return pokeList
    }

    async retrievePokemons() {
        const pokemonList = await db.pokemon.toArray()

        if (pokemonList.length === 0) {
            const pokemons = await this.loadData()
            pokemons.forEach((pokemon) => this.savePokemon(pokemon))

            return pokemons
        }
        return pokemonList
    }

    async retrievePokemon(number) {
        const dbPokemon = await db.pokemon.where({ number: Number(number) }).toArray()
        return dbPokemon[0]
    }

    async savePokemon(pokemon) {
        const dbPokemon = await db.pokemon.where("number").equals(pokemon.number).toArray()
        if (dbPokemon.length === 0) {
            await db.pokemon.add(pokemon)
        }
    }

    async updateFavorite(number, isFavorite) {
        const dbPokemon = await db.pokemon.where("number").equals(number).toArray()
        if (dbPokemon.length === 1) {
            const success = await db.pokemon.update(dbPokemon[0].id, { isFavorite: isFavorite })
            return success === 1
        }
        return false
    }

    async fetchPokeData({ pokeNumber }) {
        const [pokemonResponse, specieResponse] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeNumber}`),
        ])

        const pokemonData = await pokemonResponse.json()
        const specieData = await specieResponse.json()

        const types = pokemonData.types.map((type) => type.type.name)
        const moves = pokemonData.moves.slice(0, 2).map((move) => move.move.name)
        const description = specieData.flavor_text_entries
            .filter((flavorText) => {
                return flavorText.language.name == 'en'
            })[0]
            .flavor_text.replace('', ' ')

        const baseStats = pokemonData.stats.map((stat) => stat.base_stat)

        const pokemon = new PokemonModel(
            pokemonData.id,
            pokemonData.name,
            types,
            pokemonData.weight,
            pokemonData.height,
            moves,
            description,
            baseStats,
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`,
            false,
        )

        return pokemon
    }

}
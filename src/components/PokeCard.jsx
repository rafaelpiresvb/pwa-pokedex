import { colors } from '../constants/color'
import PokeballFavoriteIcon from '../icons/PokeballFavoriteIcon'

export default function PokeCard({ pokeData }) {
  const pokemon = pokeData
  return (
    <a class="hover:scale-105" href={`/${pokemon.number}`}>
      <figure
        class="flex h-36 w-28 flex-col overflow-hidden rounded-lg border border-gray-700"
        style={`border-color: ${colors[pokemon.types[0]]}`}
      >
        <div class="flex flex-row">
          <div
            class={`px-2 ${
              pokemon.isFavorite === true ? 'visible' : 'invisible'
            }`}
          >
            <PokeballFavoriteIcon />
          </div>
          <span
            class="w-full p-2 text-right text-xs"
            style={`color: ${colors[pokemon.types[0]]}`}
          >
            #{String(pokemon.number).padStart(3, '0')}
          </span>
        </div>
        <img
          src={pokemon.imgUrl}
          alt=""
          class="aspect-square w-20 self-center"
          loading="lazy"
        />
        <figcaption
          class="mt-auto w-full p-1 text-center text-sm capitalize text-white"
          style={`background-color: ${colors[pokemon.types[0]]}`}
        >
          {pokemon.name}
        </figcaption>
      </figure>
    </a>
  )
}

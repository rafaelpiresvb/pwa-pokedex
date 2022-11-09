import { colors } from '../constants/color'

export default function PokeCard({ pokeData }) {
  const { number, name, type, sprite } = pokeData
  return (
    <a class="hover:scale-105" href={`/${number}`}>
      <figure
        class="flex h-36 w-28 flex-col overflow-hidden rounded-lg border border-gray-700"
        style={`border-color: ${colors[type]}`}
      >
        <span
          class="w-full p-2 text-right text-xs"
          style={`color: ${colors[type]}`}
        >
          #{String(number).padStart(3, '0')}
        </span>
        <img
          src={sprite}
          alt=""
          class="aspect-square w-20 self-center"
          loading="lazy"
        />
        <figcaption
          class="mt-auto w-full p-1 text-center text-sm capitalize text-white"
          style={`background-color: ${colors[type]}`}
        >
          {name}
        </figcaption>
      </figure>
    </a>
  )
}

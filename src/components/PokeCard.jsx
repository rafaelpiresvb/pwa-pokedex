export default function PokeCard({ pokeData }) {
  return (
    <figure class="flex h-36 w-28 flex-col overflow-hidden rounded-lg border border-grass">
      <span class="w-full p-2 text-right text-xs">#001</span>
      <img src={pokeData} alt="" class="aspect-square w-20 self-center" loading="lazy" />
      <figcaption class=" mt-auto w-full bg-grass p-1 text-center text-sm capitalize text-white">
        Bulbasaur
      </figcaption>
    </figure>
  )
}

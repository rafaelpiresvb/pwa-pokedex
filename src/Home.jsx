import Nullstack from 'nullstack'
import PokeCard from './components/PokeCard'
import NumberSort from './icons/NumberSort'
import PokeballIcon from './icons/PokeballIcon'
import { PokemonService } from './service/PokemonService'

class Home extends Nullstack {
  pokeList = []

  launch({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} foi feito com Nullstack`
  }

  async hydrate() {
    const service = new PokemonService()
    this.pokeList = await service.retrievePokemons()
  }

  renderHeader() {
    return (
      <header class="sticky top-0 z-30 w-full bg-white py-1 ">
        <div class="flex gap-4">
          <PokeballIcon />
          <h1 class="text-2xl font-bold">Pokédex</h1>
          <span class="ml-auto cursor-pointer">
            <NumberSort />
          </span>
        </div>
        <div class="mt-3">
          <SearchBar />
        </div>
      </header>
    )
  }

  renderSearchBar() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          class="w-full rounded-lg border border-gray-300 p-2"
        />
      </div>
    )
  }

  renderPokelist() {
    return (
      <div class="flex flex-wrap justify-around gap-2">
        {this.pokeList.map((pokeData) => (
          <PokeCard pokeData={pokeData} />
        ))}
      </div>
    )
  }

  render({ project, greeting }) {
    return (
      <section class="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-3 px-4 py-5">
        <Header />
        <Pokelist />
      </section>
    )
  }
}

export default Home

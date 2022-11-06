import Nullstack from 'nullstack'
import PokeCard from './components/PokeCard'
import NumberSort from './icons/NumberSort'
import PokeballIcon from './icons/PokeballIcon'

class Home extends Nullstack {
  pokelist = []

  launch({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} foi feito com Nullstack`
  }

  prepare() {
    for (let i = 1; i < 152; i++) {
      this.pokelist.push(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`,
      )
    }
  }

  renderHeader() {
    return (
      <header class="flex gap-4">
        <PokeballIcon />
        <h1 class="text-2xl font-bold">Pokédex</h1>
        <span class="ml-auto cursor-pointer">
          <NumberSort />
        </span>
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
        {this.pokelist.map((pokeData) => (
          <PokeCard pokeData={pokeData} />
        ))}
      </div>
    )
  }

  render({ project, greeting }) {
    return (
      <section class="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-3 px-4 py-5">
        <Header />
        <SearchBar />
        <Pokelist />
      </section>
    )
  }
}

export default Home

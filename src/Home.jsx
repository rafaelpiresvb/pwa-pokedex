import Nullstack from 'nullstack'
import Logo from 'nullstack/logo'

class Home extends Nullstack {
  prepare({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} foi feito com Nullstack`
  }

  render({ project, greeting }) {
    return (
      <section class="my-0 mx-auto flex min-h-screen w-full max-w-3xl flex-wrap items-center p-6 md:flex-nowrap">
        <h1>PWA Pokédex</h1>
        <img
          width="250"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt=""
        />

        <span class="text-white rounded-xl bg-rock py-1 px-2 text-xs font-bold">
          Rock
        </span>
      </section>
    )
  }
}

export default Home

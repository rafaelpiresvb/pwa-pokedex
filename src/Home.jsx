import Nullstack from 'nullstack'
import Logo from 'nullstack/logo'
import Tag from './components/Tag'

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

        <Tag class="bg-rock">Rock</Tag>
        <Tag>Default</Tag>
        <Tag class="bg-normal">Normal</Tag>
        <Tag class="bg-fighting">Fighting</Tag>
      </section>
    )
  }
}

export default Home

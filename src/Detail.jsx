import Nullstack from 'nullstack'
import Tag from './components/Tag'
import { colors } from './constants/color'
import BackIcon from './icons/BackIcon'
import PokeballBackground from './icons/PokeballBackground'

class Detail extends Nullstack {
  pokeNumber = 0
  pokeData

  async initiate({ params }) {
    this.pokeNumber = params.pokeNumber
    console.log('initiate', this.pokeNumber)
  }

  async fetchPokeData() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.pokeNumber}`,
    )
    this.pokeData = await response.json()
  }

  async loadPokeData() {
    const pokeData = await this.fetchPokeData()
    console.log('loadPokeData', pokeData)
    this.pokeData = pokeData
  }

  async hydrate() {
    console.log('hydrate')
    this.fetchPokeData()
  }

  renderHeader() {
    return (
      <header class="">
        <div class="static h-52 w-full ">
          <div class="flex gap-4 ">
            <a href="/">
              <BackIcon />
            </a>
            <h1 class="text-2xl font-bold capitalize text-white">
              {this.pokeData.name}
            </h1>
            <span class="w-full p-2 text-right text-xs text-white">
              #{String(this.pokeData.id).padStart(3, '0')}
            </span>
          </div>

          {/* <div class="absolute z-10 w-full"> */}
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokeNumber}.png`}
            alt=""
            class="absolute z-10 m-auto h-60 w-full overflow-y-visible object-contain"
            loading="lazy"
          />
          {/* </div> */}

          <div class="absolute top-2 right-2 z-0 overflow-hidden pr-2 pt-2">
            <PokeballBackground />
          </div>
        </div>
      </header>
    )
  }

  render({ project, greeting }) {
    if (!this.pokeData) {
      return (
        <header>
          <h1>Loading...</h1>
        </header>
      )
    }
    return (
      <section
        class="mx-auto flex min-h-screen w-full flex-col gap-3 px-2 py-2"
        style={`background-color: ${colors[this.pokeData.types[0].type.name]}`}
      >
        <Header />
        <div class="flex-auto rounded-lg bg-white ">
          <div class="flex flex-wrap justify-center gap-4 pt-14">
            {this.pokeData.types.map((type) => (
              <Tag class={`background-color: ${colors[type.type.name]}`}>
                {type.type.name}
              </Tag>
            ))}
          </div>
          <h2
            class="text-bold py-4 text-center text-sm"
            style={`color: ${colors[this.pokeData.types[0].type.name]}`}
          >
            About
          </h2>
        </div>
      </section>
    )
  }
}

export default Detail

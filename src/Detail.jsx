import Nullstack from 'nullstack'
import StatBar from './components/StatBar'
import Tag from './components/Tag'
import { colors } from './constants/color'
import BackIcon from './icons/BackIcon'
import HeightIcon from './icons/HeightIcon'
import PokeballBackground from './icons/PokeballBackground'
import WeightIcon from './icons/WeightIcon'

class Detail extends Nullstack {
  pokeNumber = 0
  pokeData
  speciesData

  async initiate({ params }) {
    this.pokeNumber = params.pokeNumber
    console.log('initiate', this.pokeNumber)
  }

  async fetchPokeData() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.pokeNumber}`,
    )
    const species = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${this.pokeNumber}`,
    )

    this.pokeData = await response.json()
    this.speciesData = await species.json()
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

  renderAbout() {
    return (
      <div>
        <h2
          class="text-bold py-4 text-center text-2xl"
          style={`color: ${colors[this.pokeData.types[0].type.name]}`}
        >
          About
        </h2>

        <div class="grid w-full grid-cols-3 justify-evenly divide-x text-center">
          <div class="flex flex-col">
            <div class="my-auto mx-auto flex flex-row  gap-2">
              <WeightIcon />
              <span class="text-sm"> {this.pokeData.weight / 10} kg</span>
            </div>
            <span class="mt-auto text-xs text-lightgray">Weight</span>
          </div>

          <div class="flex flex-col">
            <div class="my-auto mx-auto flex flex-row gap-2">
              <HeightIcon />
              <span class="text-sm"> {this.pokeData.height / 10} m</span>
            </div>
            <span class="mt-auto text-xs text-lightgray">Height</span>
          </div>

          <div class="flex flex-col gap-2">
            <div class="my-auto mx-auto flex flex-col gap-1">
              {this.pokeData.moves.slice(0, 2).map((move) => (
                <span class="text-sm capitalize">{move.move.name}</span>
              ))}
            </div>
            <span class="mt-auto text-xs text-lightgray">Moves</span>
          </div>
        </div>
        <div class="p-4 ">
          <span class="text-xs">
            {this.speciesData.flavor_text_entries[0].flavor_text.replace(
              '',
              ' ',
            )}
          </span>
        </div>
      </div>
    )
  }

  renderTypes() {
    return (
      <div class="flex flex-wrap justify-center gap-4 pt-14">
        {this.pokeData.types.map((type) => (
          <Tag class={`background-color: ${colors[type.type.name]}`}>
            {type.type.name}
          </Tag>
        ))}
      </div>
    )
  }

  renderBaseStats() {
    return (
      <div>
        <h2
          class="text-bold py-4 text-center text-2xl"
          style={`color: ${colors[this.pokeData.types[0].type.name]}`}
        >
          Base Stats
        </h2>

        <StatBar
          color={colors[this.pokeData.types[0].type.name]}
          value={this.pokeData.stats[0].base_stat}
        >
          HP
        </StatBar>

        <StatBar
          color={colors[this.pokeData.types[0].type.name]}
          value={this.pokeData.stats[1].base_stat}
        >
          ATK
        </StatBar>

        <StatBar
          color={colors[this.pokeData.types[0].type.name]}
          value={this.pokeData.stats[2].base_stat}
        >
          DEF
        </StatBar>

        <StatBar
          color={colors[this.pokeData.types[0].type.name]}
          value={this.pokeData.stats[3].base_stat}
        >
          SATK
        </StatBar>

        <StatBar
          color={colors[this.pokeData.types[0].type.name]}
          value={this.pokeData.stats[4].base_stat}
        >
          SDEF
        </StatBar>

        <StatBar
          color={colors[this.pokeData.types[0].type.name]}
          value={this.pokeData.stats[5].base_stat}
        >
          SPD
        </StatBar>
      </div>
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
          <Types />
          <About />
          <BaseStats />
        </div>
      </section>
    )
  }
}

export default Detail

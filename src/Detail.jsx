import Nullstack from 'nullstack'
import StatBar from './components/StatBar'
import Tag from './components/Tag'
import { colors } from './constants/color'
import BackIcon from './icons/BackIcon'
import HeightIcon from './icons/HeightIcon'
import LeftArrow from './icons/LeftArrow'
import PokeballAddToFavoriteIcon from './icons/PokeballAddToFavoriteIcon'
import PokeballBackground from './icons/PokeballBackground'
import PokeballFavoriteIcon from './icons/PokeballFavoriteIcon'
import RightArrow from './icons/RightArrow'
import WeightIcon from './icons/WeightIcon'
import { PokemonService } from './service/PokemonService'

class Detail extends Nullstack {
  pokeNumber = 0
  pokemon
  pokemonService = new PokemonService()

  async initiate({ params }) {
    this.pokeNumber = params.pokeNumber
  }

  async hydrate() {
    this.pokemon = await this.pokemonService.retrievePokemon(this.pokeNumber)
  }

  async changeFavorite() {
    const success = await this.pokemonService.updateFavorite(
      this.pokemon.number,
      !this.pokemon.isFavorite,
    )
    if (success === true) {
      this.pokemon.isFavorite = !this.pokemon.isFavorite
      const message = this.pokemon.isFavorite
        ? 'Pokemon set as favorite successfully!'
        : 'Pokemon removed as favorite successfully!'
      alert(message)
    }
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
              {this.pokemon.name}
            </h1>

            <div
              onclick={this.changeFavorite}
              class="z-20 hover:cursor-pointer"
            >
              {this.pokemon.isFavorite ? (
                <PokeballFavoriteIcon />
              ) : (
                <PokeballAddToFavoriteIcon />
              )}
            </div>

            <span class="w-full p-2 text-right text-xs text-white">
              #{String(this.pokemon.number).padStart(3, '0')}
            </span>
          </div>

          <img
            src={this.pokemon.imgUrl}
            alt=""
            class="absolute z-10 m-auto h-60 w-full overflow-y-visible object-contain"
            loading="lazy"
          />

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
          style={`color: ${colors[this.pokemon.types[0]]}`}
        >
          About
        </h2>

        <div class="grid w-full grid-cols-3 justify-evenly divide-x text-center">
          <div class="flex flex-col">
            <div class="my-auto mx-auto flex flex-row  gap-2">
              <WeightIcon />
              <span class="text-sm"> {this.pokemon.weight / 10} kg</span>
            </div>
            <span class="mt-auto text-xs text-lightgray">Weight</span>
          </div>

          <div class="flex flex-col">
            <div class="my-auto mx-auto flex flex-row gap-2">
              <HeightIcon />
              <span class="text-sm"> {this.pokemon.height / 10} m</span>
            </div>
            <span class="mt-auto text-xs text-lightgray">Height</span>
          </div>

          <div class="flex flex-col gap-2">
            <div class="my-auto mx-auto flex flex-col gap-1">
              {this.pokemon.moves.slice(0, 2).map((move) => (
                <span class="text-sm capitalize">{move}</span>
              ))}
            </div>
            <span class="mt-auto text-xs text-lightgray">Moves</span>
          </div>
        </div>
        <div class="p-4 ">
          <span class="text-xs">{this.pokemon.description}</span>
        </div>
      </div>
    )
  }

  renderTypes() {
    return (
      <div class="flex flex-wrap justify-center gap-4 pt-16">
        {this.pokemon.types.map((type) => (
          <Tag class={`background-color: ${colors[type]}`}>{type}</Tag>
        ))}
      </div>
    )
  }

  renderBaseStats() {
    return (
      <div>
        <h2
          class="text-bold py-4 text-center text-2xl"
          style={`color: ${colors[this.pokemon.types[0]]}`}
        >
          Base Stats
        </h2>

        <StatBar
          color={colors[this.pokemon.types[0]]}
          value={this.pokemon.baseStats[0]}
        >
          HP
        </StatBar>

        <StatBar
          color={colors[this.pokemon.types[0]]}
          value={this.pokemon.baseStats[1]}
        >
          ATK
        </StatBar>

        <StatBar
          color={colors[this.pokemon.types[0]]}
          value={this.pokemon.baseStats[2]}
        >
          DEF
        </StatBar>

        <StatBar
          color={colors[this.pokemon.types[0]]}
          value={this.pokemon.baseStats[3]}
        >
          SATK
        </StatBar>

        <StatBar
          color={colors[this.pokemon.types[0]]}
          value={this.pokemon.baseStats[4]}
        >
          SDEF
        </StatBar>

        <StatBar
          color={colors[this.pokemon.types[0]]}
          value={this.pokemon.baseStats[5]}
        >
          SPD
        </StatBar>
      </div>
    )
  }

  renderNavigationArrows() {
    return (
      <div class="-mt-9 flex  w-full justify-between px-9">
        <a
          href={`/${Number(this.pokemon.number) - 1}`}
          class={`z-20 ${this.pokemon.number == 1 ? 'invisible' : 'visible'}`}
        >
          <LeftArrow />
        </a>

        <a
          href={`/${Number(this.pokemon.number) + Number(1)}`}
          class={`z-20 ${this.pokemon.number == 151 ? 'invisible' : 'visible'}`}
        >
          <RightArrow />
        </a>
      </div>
    )
  }

  render({ project, greeting }) {
    if (!this.pokemon) {
      return (
        <header>
          <h1>Loading...</h1>
        </header>
      )
    }
    return (
      <section
        class="mx-auto flex min-h-screen w-full flex-col gap-3 px-2 py-2"
        style={`background-color: ${colors[this.pokemon.types[0]]}`}
      >
        <Header />
        <div class="flex-auto rounded-lg bg-white ">
          <NavigationArrows />
          <Types />
          <About />
          <BaseStats />
        </div>
      </section>
    )
  }
}

export default Detail

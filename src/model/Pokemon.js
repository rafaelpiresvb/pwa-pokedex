export class PokemonModel {
  constructor(
    number,
    name,
    types,
    weight,
    height,
    moves,
    description,
    baseStats,
    imgUrl,
    isFavorite,
  ) {
    this.number = number
    this.name = name
    this.types = types
    this.weight = weight
    this.height = height
    this.moves = moves
    this.description = description
    this.baseStats = baseStats
    this.imgUrl = imgUrl
    this.isFavorite = isFavorite
  }
}

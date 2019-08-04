class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name + ', ' + data.types[1].type.name;
    this.height = data.height;
    this.height = data.weight; 
  }
}

export default Pokemon;
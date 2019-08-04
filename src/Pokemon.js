class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.type =   data.types[0].type.name + ', ' + data.types[1].type.name;
    this.height = ((''+data.height).length) > 1 ? (''+data.height)[0] + '.' + (''+data.height)[1] + ' m' : '.' + data.height + ' m';
    this.weight = (''+data.weight)[0] + '.' + (''+data.weight)[1] + ' kg'; 
  }
    
}




export default Pokemon;
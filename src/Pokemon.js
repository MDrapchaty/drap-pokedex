class Pokemon {
  constructor(data) {
    this.id = '#' + data.id;
    this.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    this.sprite = data.sprites.front_default;
    this.type1 = data.types[0].type.name;
    this.type2 = (data.types.length) > 1 ?  data.types[1].type.name : 'blank';
    this.height = ((''+data.height).length) > 1 ? (''+data.height)[0] + '.' + (''+data.height)[1] + ' m' : '.' + data.height + ' m';
    this.weight = (''+data.weight)[0] + '.' + (''+data.weight)[1] + ' kg'; 
  }
    
}




export default Pokemon;
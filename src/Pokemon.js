class Pokemon {
  constructor(data) {
    this.id = '#' + data.id;
    this.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    this.sprite = data.sprites.front_default;
    this.type1 = data.types[0].type.name;
    this.type2 = (data.types.length) > 1 ?  data.types[1].type.name : 'blank';
    this.ability = data.abilities.length > 1 ?  data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1) + ' / ' + data.abilities[1].ability.name.charAt(0).toUpperCase() + data.abilities[1].ability.name.slice(1) : data.abilities[0].ability.name.charAt(0).toUpperCase() + data.abilities[0].ability.name.slice(1);
    this.height = ((''+data.height).length) > 1 ? 'Height: ' + (''+data.height)[0] + '.' + (''+data.height)[1] + ' m' : 'Height: .' + data.height + ' m';
    this.weight = ((''+data.weight).length) > 1 ? 'Weight: ' + (''+data.weight).substring(0, (''+data.weight).length - 1) + '.' + (''+data.weight).substr(-1) + ' kg' : '.' + (''+data.weight)[0] + ' kg'; 

  }
    
}




export default Pokemon;
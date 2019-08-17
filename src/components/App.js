import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);

  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  test(){
    console.log('oh lawdy!');
  }

handleChange = event => {
   this.setState({ username: event.target.value });
 };

  render(handleOnClick) {
    return (
      <div className="App">
        <div id="search">
          <form>
         
         <input
           type="text"
           id="test"
           name="username"
           value={this.state.username}
           onChange={this.handleChange}
         />
         <button onClick={this.handleOnClick(this.state.username)}>Click me</button>
       </form>

        </div>
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}


export default App;
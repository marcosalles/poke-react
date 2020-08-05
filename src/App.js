import React from 'react';
import axios from 'axios';
import PokeInfo from './components/PokeInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        types: [],
        name: '',
        description: '',
        abilities: [],
      },
      searchString: 'pikachu',
    };
  }

  componentDidMount() {
    this.search();
  }

  saveSearchContent = (event) => {
    const searchString = event.target.value;
    this.setState(() => ({ searchString: searchString }));
  };

  savePokemonFromApi = async ({ data }) => {
    const pokemon = {};
    pokemon.name = data.name;
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.id.toString().padStart(3, '0')}.png`;
    pokemon.abilities = data.abilities.map(item => item.ability.name);
    pokemon.types = data.types.map(item => item.type.name);
    pokemon.description = 'A Pokemon to catch them all';

    this.setState(() => ({ pokemon: pokemon }));
  };

  search = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + this.state.searchString;
    axios.get(url)
      .then(this.savePokemonFromApi)
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div style={styles.main}>
        <div>
          <input onChange={this.saveSearchContent}/>
          <button onClick={this.search}>Buscar</button>
        </div>
        
        <div style={styles.pokemonCard}>
          <PokeInfo pokemon={this.state.pokemon}/>
          <img  style={styles.img} src={this.state.pokemon.image}/>
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  main: {
    backgroundColor: '#f64f37',
    margin: 0,
    padding: 0,
  },
  pokemonCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
  }
};
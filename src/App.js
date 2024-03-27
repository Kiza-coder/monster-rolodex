import { Component } from 'react';
import CardList from './Components/Card-list/card-list.component';
import SearchBox from './Components/Search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }
      ))
  }

  onSearchChange = (event) => {
    let searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => { return { searchField }; });
  }



    render() {

      var {monsters, searchField} = this.state;
      var { onSearchChange } = this;

      var filteredMonster = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

      return (
        <div className="App">
          <SearchBox onChangeHandler={onSearchChange} placeholder="search monster..." className="search-box"/>
          <CardList monsters={filteredMonster}/>
        </div>
      );
    }

  }

export default App;

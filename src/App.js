import React from 'react';
import './App.css';

import SearchBox from './components/searchbox/searchbox.component';
import CardList from './components/cardlist/cardlist.component';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({cats: users}))
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>KittyCats</h1>
        <SearchBox handleChange={this.handleChange}/>
        <CardList cats={filteredCats}/>
      </div>
    );
  } 
}

export default App;

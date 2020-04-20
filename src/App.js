import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';
import contacts from './data/contacts.json'


class App extends Component {
  state = {
    celebrities: contacts.slice(0,5),
    
  }

  addRandomContact = () => {
      let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
      let newCelebritiesList = [...this.state.celebrities, randomContact];
      this.setState({
        celebrities : newCelebritiesList 
      })
  } 




deleteCelebrity = celebrityName => {
  let newCelebrities = [...this.state.celebrities].filter((celebrity) => {
    if (celebrity.name !== celebrityName) {
      return celebrity
    } 
  })

  this.setState({
    celebrities: newCelebrities
  })
}






  render(){
      const celebrities = this.state.celebrities.map((celebrity, index) => {
        return <Card key={index} {...celebrity} onDelete={() => this.deleteCelebrity(celebrity.name)} />
      })

    return (
      <div className="App">
      <h1>IronContacts</h1>
        <button className="btn" onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button className="btn" onClick={() => this.sortByPopularity()}>Sort By Popularity</button>
        <button className="btn" onClick={() => this.sortByName()}>Sort By Name</button>

        <table>
          <thead>
 
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>

          </thead>
          <tbody>
            {celebrities}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;


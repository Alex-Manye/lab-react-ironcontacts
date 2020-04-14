import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.js';
import contacts from './data/contacts.json'


class App extends Component {
  state = {
    celebrities: contacts.slice(0,5) 

  }


  render() {

      const celebrities = this.state.celebrities.map((celebrity, index) => {
        return <Card key={index} {...celebrity} onDelete={() => this.deleteCelebrity(celebrity.name)} />
      })

    return (
      <div className="App">
      <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
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


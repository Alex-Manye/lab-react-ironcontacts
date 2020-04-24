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

sortByPopularity = () =>{
  let sortedList = this.state.celebrities.sort((a, b) => {
    if (this.state.sortedPopularity){
    return a.popularity-b.popularity}
    else{
      return b.popularity - a.popularity
    } 
  });


/*  2 way of sort by popularity-> this one only sort in descending order
 this.setState({
    celebrities: sortedList
  }) */

//This second setState allows to sort in asc and in desc order.  
this.setState({
  contacts: sortedList, 
  sortedPopularity: !this.state.sortedPopularity 
  });
}

sortByName = () => {
  let sortedListByName = this.state.celebrities.sort((a, b) => {
    if (this.state.sortedbyName){
    return a.name.localeCompare(b.name)
    } else {
      return b.name.localeCompare(a.name);
    } 
  });
  this.setState({
    contacts: sortedListByName, 
    sortedbyName: !this.state.sortedbyName
  });
};



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


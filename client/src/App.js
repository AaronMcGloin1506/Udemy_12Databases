import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  addUser(){
    axios.get('/api/users')
    .then( response =>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  }


  render(){
  return (
    <div className="App">
        <button onClick={()=>this.addUser()}>Add User</button>
    </div>
  )
}
}

export default App;
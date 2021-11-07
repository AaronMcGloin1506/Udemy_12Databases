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

  onSubmitCar(){
    axios.post('/api/addcar',{
      brand: 'Ford',
      model: 'Focus',
      year: '2021',
      avail: true
    })
    .then( response => {
      console.log(response.data)
    })
  }


  render(){
  return (
    <div className="App">
        <button onClick={()=>this.onSubmitCar()}>Add Car</button>
    </div>
  )
}
}

export default App;
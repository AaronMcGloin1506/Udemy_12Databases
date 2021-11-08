import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = { 
    cars: []
  }

  componentDidMount(){
    axios.get('/api/getcars')
    .then(response => {
      console.log(response.data)
      this.setState({cars:response.data})
    })
  }

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
      brand: 'Citroen',
      model: 'Berlingo',
      year: '2008',
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

        { this.state.cars.map((car)=>{
          return(
          <div> - {car.brand}</div>)
        })}
    </div>
  )
}
}

export default App;
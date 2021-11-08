import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = { 
    cars: []
  }

  componentDidMount(){
    this.getCars()
  }

  getCars = () => {
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

  onCarRemove(){
    axios.post('/api/removeCar',{
      brand: 'Citroen'
    })
    .then(response => {
      this.getCars()
    })
  }

  onCarUpdate(){
    axios.post('/api/updateCar',{
      id: '6187afc0914fd137ebf7b7a1',
      brand:'BMW'
    })
    .then(response => {
      this.getCars()
    })
  }


  render(){
  return (
    <div className="App">
        <button onClick={()=>this.onSubmitCar()}>Add Car</button>
        <button onClick={()=> this.onCarRemove()}>Remove Car</button>
        <button onClick={()=> this.onCarUpdate()}>UpdateCar</button>
        <hr/>
        { this.state.cars.map((car)=>{
          return(
          <div> - {car.brand}</div>)
        })}
    </div>
  )
}
}

export default App;
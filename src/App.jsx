import logo from './logo.svg';
import './App.css';
import React from 'react';


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      list: ["ready", "set", "go"],
      text: "",
    }
this.onSubmit = this.onSubmit.bind(this)

}

onSubmit(event){
  event.preventDefault();
  this.setState({list: [...this.state.list, this.state.text]})
}

  
  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
        <label>Enter text</label>
        <input value={this.state.text} onChange={(event)=> this.setState({text: event.target.value})} ></input>
        <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item , index) => {
          return <li key= {item + index}>{item}</li>
          })}
          </ul>
      </div>
    );
  }
}

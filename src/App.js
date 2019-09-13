import React, {Component} from 'react';
import List from "./components/List"
import './App.css';

class  App extends Component {
  // two properties "term" which will store the value of our input and "items" to store every value of our to-do list
  state = {
   term:"", items: []
  }
  // value takes what is stored in our state as term and onChange changes state depending on current input value
  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  // onSubit does 3 things: 1) cleans input field after action triggered, pushes every term to our array after submit, 3) preventdefault stops page from reloading

 

  render(){
    return(
      <div>
       <form className="App" onSubmit={this.onSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button>Submit</button>
   </form>
   <List items={this.state.items}/>


      </div>
    )
  }

    
}

export default App;

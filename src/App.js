import React, { Component } from 'react';
// import Header from './Header';
// import Footer from './Footer';
import TodoInput from './TodoInput';
import Todolist from './Todolist';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      todoItems: []
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo (newTodo) {
    this.setState({
      todoItems: this.state.todoItems.concat([newTodo])
    })
  }

  render() {
    let { todoItems } = this.state
    return (
      <div>
        Add Todo
        <TodoInput onAddTodo={this.addTodo}/>
        <Todolist items={todoItems}/>
      </div>
    );
  }
}

export default App;

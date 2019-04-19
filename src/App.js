import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import Axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res =>this.setState( {todos: res.data }))
  }

  // Toggle todo completed on item 
  markComplete = (id) => {
    this.setState( {todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })} )
  }

  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState(
      { todos:
        [...this.state.todos.filter(todo => todo.id !== id )]
      }))
  }

//add todo
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos?', { title, completed: false })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
  }

  render() {
    return (
      <Router>
        <div className="App">
        <div className='container'>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )}/>
          <Route path='/about' component={About} />

            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

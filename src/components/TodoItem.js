import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#a1a1a1',
      padding: '10px',
      borderBorrom: '1px #ccc solid',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }


  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}></input>
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  backgroundColor: 'red',
  padding: '2px', 
  border: '1px solid black',
  borderRadius: '50%',
  float: 'right',
  cursor: 'pointer',
  lineHeight: '0.8'
}

TodoItem.propTypes = {
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default TodoItem
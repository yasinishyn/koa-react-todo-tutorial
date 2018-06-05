import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Todo = ({ todo, id, onDelete, onToggle }) => (
  <div className="box todo-item level is-mobile">
    <div className="level-left">
      <label className={`level-item todo-description ${todo.done && 'completed'}`}>
        <input className="checkbox" type="checkbox" checked={todo.done} onChange={onToggle}/>
        <span>{todo.description}</span>
      </label>
    </div>
    <div className="level-right">
      <a className="delete level-item" onClick={onDelete}>Delete</a>
    </div>
  </div>
)

class Todos extends Component {
  state = { newTodo: '' }

  addTodo (event) {
    event.preventDefault() // Prevent form from reloading page
    const { newTodo } = this.state

    if(newTodo) {
      const todo = { description: newTodo, done: false }
      this.props.addTodo(todo)
      this.setState({ newTodo: '' })
    }
  }

  deleteTodo () {

  }

  toggleTodo () {

  }

  render() {
    let { newTodo } = this.state
    let { todos } = this.props.data

    todos = todos || [];

    const total = todos.length
    const complete = todos.filter((todo) => todo.done).length
    const incomplete = todos.filter((todo) => !todo.done).length

    return (
      <section className="section full-column">
        <h1 className="title white">Todos</h1>

        <form className="form" onSubmit={this.addTodo.bind(this)}>
          <div className="field has-addons" style={{ justifyContent: 'center' }}>
            <div className="control">
              <input className="input"
                     value={newTodo}
                     placeholder="New todo"
                     onChange={(e) => this.setState({ newTodo: e.target.value })}/>
            </div>
          </div>
        </form>

        <div className="container todo-list">
          { todos &&
            todos.map((todo) => <Todo key={todo.id}
                                      id={todo.id}
                                      todo={todo}
                                      onDelete={() => this.deleteTodo(todo._id)}
                                      onToggle={() => this.toggleTodo(todo._id)}/> )}
          <div className="white">
            Total: {total}  , Complete: {complete} , Incomplete: {incomplete}
          </div>
        </div>
      </section>
    );
  }
}

export default graphql(gql`
  query TodoAppQuery {
    todos {
      id
      description
    }
  }
`)(Todos);

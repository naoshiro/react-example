import "./css/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout.js";
import TodoTabel from "./components/todoTable.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  }

  saveTodos() {
    const todos = this.state.todos;
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.map( v => {
        if (v.id == id) v.status = 'delete'
        return v;
      })
    }, this.saveTodos);
  }

  fixTodo(id) {
    this.setState({
      todos: this.state.todos.map( v => {
        if (v.id == id) v.status = 'fix'
        return v;
      })
    }, this.saveTodos);
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map( v => {
        if (v.id == id) {
          v.status = v.status == 'start' ? 'stop' : 'start';
        } else {
          v.status = v.status == 'start' ? 'stop' : v.status;
        }
        return v;
      })
    }, this.saveTodos);
  }

  addTodo(e) {
    if(e.key !== 'Enter' || e.target.value === '') return
    this.setState({
      todos: this.state.todos.concat([{
        id: this.state.todos.length + 1,
        title: e.target.value,
        create_date: new Date(),
        fix_date: null,
        status: "standby",
      }])
    }, this.saveTodos);
    e.target.value = '';
  }

  render() {
    return (
      <Layout>
        <TodoTabel
          todos={this.state.todos}
          onDeleteTodo={this.deleteTodo.bind(this)}
          onFixTodo={this.fixTodo.bind(this)}
          onToggleTodo={this.toggleTodo.bind(this)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="新規タスク"
          onKeyPress={e=>this.addTodo(e)}
        />
      </Layout>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

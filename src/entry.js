require("./style.css");
require("./threeTest.js");
const React = require("react");
const ReactDOM = require("react-dom");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newtask: "",
      todos: [
        {
          title: "サンプル1",
          create_date: new Date(),
          fix_date: null,
          status: "standby",
        }
      ]
    };
  }

  chengeNewTask(e) {
    this.setState({
      newtask: e.target.value
    })
  }

  deleteTask(i) {
    this.setState({
      todos: this.state.todos.filter( (v, d) => i != d ? true : false)
    })
  }

  fixTask(i) {
    var todos = this.state.todos;
    console.log(todos[i].create_date);
    todos[i].status = "fix";
    todos[i].fix_date = new Date();
    this.setState({
      todos: todos
    })
  }

  addTask() {
    if (!this.state.newtask) return;
    const v = {
      title: this.state.newtask,
      create_date: new Date(),
      fix_date: null,
      status: "standby",
    }
    this.setState({
      newtask: "",
      todos: this.state.todos.concat([v])
    })
  }

  toTime(v) {
    return v ? v.getHours() + ":" + v.getMinutes() : '-';
  }

  renderTasks() {
    return this.state.todos.map( (v, i) => {
      return (
        <tr key={i}>
          <td>{v.title}</td>
          <td>{v.status}</td>
          <td>{this.toTime(v.create_date)}</td>
          <td>{this.toTime(v.fix_date)}</td>
          <td>
            <button onClick={ () => this.deleteTask(i)}>削除</button>
            <button onClick={ () => this.fixTask(i)}>完了</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <main>
        <h1>TODO</h1>
        <table>
          <thead>
            <tr>
              <th>タスク</th>
              <th>ステータス</th>
              <th>作成日</th>
              <th>完了日</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTasks()}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <input
                  value={this.state.newtask}
                  onChange={e => this.chengeNewTask(e)}
                  onKeyPress={e => e.key == 'Enter' ? this.addTask() : ''}
                />
              </td>
              <td>
                <button onClick={ () => this.addTask()}>追加</button>
              </td>
              <td />
              <td />
              <td />
            </tr>
          </tfoot>
        </table>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

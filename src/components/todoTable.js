import React from "react";

export default class TodoTable extends React.Component {
  statusLabel(label) {
    switch (label) {
      case 'start':
        return <label className="badge badge-info mr-1">着手</label>;
        break;
      case 'stop':
        return <label className="badge badge-default mr-1">停止</label>;
        break;
      case 'fix':
        return <label className="badge badge-success mr-1">完了</label>;
        break;
      default:
        return <label className="badge badge-danger mr-1">新規</label>;
    }
  }

  renderTodos() {
    return this.props.todos.map( v => {
      return (
        <tr key={v.id} className={v.status == 'delete' ? 'hidden-xs-up' : ''}>
          <td>{this.statusLabel(v.status)} {v.title}</td>
          <td className="text-right">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={()=>this.props.onToggleTodo(v.id)}
              >
                {v.status == 'start' ? '停止' : '着手'}
              </button>
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={()=>this.props.onFixTodo(v.id)}
              >
                完了
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={()=>this.props.onDeleteTodo(v.id)}
              >
                削除
              </button>
            </div>
          </td>
        </tr>
      );
    })
  }

  render() {
    return (
      <table className="table">
        <tbody>{this.renderTodos()}</tbody>
      </table>
    );
  }
}

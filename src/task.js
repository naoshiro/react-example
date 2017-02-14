const React = require("react");
const ReactDOM = require("react-dom");

module.exports = class Task extends React.Component {
  render() {
    return (
      <div>
        <p>タスク名</p>
        <button>完了</button>
      </div>
    );
  }
};

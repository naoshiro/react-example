const React = require("react");

export default class Layout extends React.Component {
  render() {
    return (
      <main className="container">
        <h1 className="text-center pt-3">TodoTracker</h1>
        <p className="text-center">React Todo Example</p>
        <div className="container">{this.props.children}</div>
      </main>
    );
  }
}

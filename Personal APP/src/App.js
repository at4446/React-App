class Header extends React.Component {
  render() {
    const options = [1, 2, 3, 4, 5, 6];
    return (
      <div>
                
                <Action options={options}>
                </Action>
                <Option></Option >
      </div>
    );
  }
}

class Action extends React.Component {
  Handlepick() {
    alert("picked me");
  }
  render() {
    return (
      <div>
        <p>{this.props.options.length}</p>
        <button onClick={this.Handlepick}> What Should I do Now</button>
      </div>
    );
  }
}
class Option extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const opt = e.target.elements.opt.value;
    aler(opt);
  }
  render() {

      return (
          <div>
              <button onClick={this.handleAddOption}> add now</button>
              <input ></input>
          </div>
    );
  }
}

ReactDOM.render(<Header></Header>, document.getElementById('app'));

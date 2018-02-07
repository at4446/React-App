class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleMinusone=this.handleMinusone.bind(this);
    this.handleAddOne=this.handleAddOne.bind(this);
    this.handleRestart=this.handleRestart.bind(this);
    this.state={
      count:0
    }
  }

    
  handleAddOne(){
    this.setState((prevs) => {
      return{
          count: prevs.count+1
        };
      });
    }
  
   handleMinusone(){
    this.setState((prevs) => {
      return {
        count: prevs.count-1
    };
  });
  }
   handleRestart(){
        this.setState((prevs) => {
      return {
        count:  0
    };
  });
    
  }

    render(){
    return(
        <div>
            <h1>count:{this.state.count}</h1>
            <button onClick={this.handleAddOne}> +1</button>
            <button onClick={this.handleMinusone}>-1</button>
            <button onClick={this.handleRestart}>reset</button>
        </div>

      );  
  }

}

ReactDOM.render(<Counter />,document.getElementById('app'));





/*var count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();*/
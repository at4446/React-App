class Visible extends React.Component{
  constructor(props){
    super(props);
    this.handleVisibility=this.handleVisibility.bind(this);
    this.state = {
      visiblity: false
    };
  }
handleVisibility(){
  this.setState((prevState) => {
      return{
        visiblity : !prevState.visiblity
        };
  });
   
}
render(){
  return(
    <div>
     <p> this is the content </p>
     <button onClick={this.handleVisibility}> {this.state.visiblity ? "hide detail" :"show detail"} </button>
        {
         this.state.visiblity &&(  
           <div>
              <p> this is the content </p>
           </div>
          )
        }
    </div>
    );
  }
}




ReactDOM.render(<Visible />,document.getElementById('app'));


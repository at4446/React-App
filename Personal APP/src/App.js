class Header extends React.Component {

    render() {
      const options=[1,2,3,4,5,6];
          return(
            options.map((object, i) => 
              
          
               <div>
                <p key={i}> Amiar+{options[object]} </p>

                <Action options={options}>
                </Action>
               </div>
      
          )
        );
      }   
}

class Action extends React.Component{

render(){

return(

<div>
<p>{this.props.options.length}</p>

<button> What Should I do Now</button>
</div>
);

}
}





ReactDOM.render(<Header></Header>, document.getElementById('app'));

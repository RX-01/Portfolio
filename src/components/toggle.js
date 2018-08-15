import React, { Component } from 'react';

class toggle extends Component {
  
  constructor(props) {
      super(props)
      this.state = {
        on:false
      }
    };
    
    toggle = ()=> {
      
      this.setState({
        on:!this.state.on
      })
    };

    toggleDelay = ()=> {
      setTimeout(
        this.setState({
          on:!this.state.on
        })
        , 3000);
   
    };
  
  render() {
    const {on} = this.state

    return (
      <div>
        {on&& this.props.children}
        <button onClick = {this.toggle}>Show/Hide</button>
        
      </div>
    );
  }
}

export default toggle;
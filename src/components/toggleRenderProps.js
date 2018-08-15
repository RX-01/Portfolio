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
  
  render() {
    const {on} = this.state
    const {render} = this.props
    return (
      <div>
        {render({
          on:on,
          toggle:this.toggle
        })}
        
      </div>
    );
  }
}

export default toggle;
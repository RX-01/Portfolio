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
    const {children} = this.props
    return (
      children({
        on:on,
        toggle: this.toggle,
      })
    );
  }
}

export default toggle;
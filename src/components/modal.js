import React, { Component } from 'react';
import Portal from './portal';
import './modal.css';
import { ModalWrapper, ModalBody,Backgroud} from './Style/Styles';
import { Transition } from 'react-spring'

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      closed :true
    }
  }

  closeModal = (execute)=> {
    this.setState({
      closed:!this.state.closed
  }, () => {
    execute;
})
}
  
  render() {
    const {on, toggle,children,delay} = this.props


    return (
      <Portal>
      <Transition from={{ opacity: 0}} enter={{ opacity: 1}} leave={{ opacity: 0}} >
      { on && (
        (styles => <ModalWrapper style={styles}>
            <ModalBody>
              {children}
              <button onClick = {toggle}>Close</button>
            </ModalBody>
            <Backgroud onClick = {toggle}/>
          </ModalWrapper>)     
      )} 
      </Transition>
      </Portal>
    );
  }
}

//<div className= {['fadeIn', 'ModalWrapper', closed&& 'fadeOut'].join(' ')}>

export default Modal;

        // <ModalWrapper>
        //   <ModalBody>
        //     {children}
        //     <button onClick = {toggle}>Close</button>
        //   </ModalBody>
        //   <Backgroud onClick = {toggle}/>
        // </ModalWrapper>
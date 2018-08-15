import React, { Component,Fragment } from 'react';
import { Transition } from 'react-spring'
import ToggleRPC from './toggleRPC';
import Modal from './modal';

class Home extends Component {
  render() {
    return (
      <div>



      <ToggleRPC>
      {
       
        // use () instead of {} to as a way of invoking RETURN
        ({on,toggle,delay})=> (
         <Fragment>
         <Modal on = {on} toggle = {toggle} delay = {delay}>
             <h1>Still In Modal</h1>
         </Modal>
         <button onClick = {toggle}>Modal</button>
         </Fragment>
         )
      }
      </ToggleRPC>

      <ToggleRPC>
      {
       
        // use () instead of {} to as a way of invoking RETURN
        ({on,toggle})=> (
         <Fragment>
     
         <button onClick = {toggle}>Spring</button>
         <Transition from={{ opacity: 1, scale: 0}} enter={{ opacity: 1,  scale: 2}} leave={{ opacity: 0, scale: 1}} >
            {on&& 
              (styles => <div style={styles}><h1>Single Component</h1></div>)
            }        
         </Transition>
         </Fragment>
         )
      }
      </ToggleRPC>
      </div>
    );
  }
}

const Trans = styles => <h1 style={{...styles}}>Hello Spring</h1>

export default Home;
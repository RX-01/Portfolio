import React, { Component } from 'react'

class Showcase extends Component {
  render () {
    return (
      <Consumer>
      { value => (

        <div className = "List">
          {value.contacts.map(contactInfo => { 
            return <Contact 
                    userInfo = {contactInfo} 
                    key = {contactInfo.id}
                    deleteClickHandler = {()=> value.deleteContact(contactInfo)}/>
          })}
        </div>
      )}
    </Consumer>
    )
  }
}

export default Showcase
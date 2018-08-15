import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal');

class Portal extends Component {

  constructor (props) {
    super(props)
    this.el = document.createElement('div')
    this.el.setAttribute("class", "PortalBody");
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }

    componentWillUnmount = () => {
    portalRoot.appendChild(this.el)
  }
  

  render () {
    const {children} = this.props
    return ReactDOM.createPortal(children,this.el)
  }
}

export default Portal
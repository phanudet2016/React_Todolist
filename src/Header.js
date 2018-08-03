import React, { Component } from 'react';

class Header extends Component {

  constructor (props) {
    super(props)
    this.handleHeaderClicked = this.handleHeaderClicked.bind(this)
  }

  handleHeaderClicked () {
    alert(this.props.currenUser)
  }

  render () {
    let { currenUser, isLogIn } = this.props
    return (
      <div onClick={this.handleHeaderClicked}>Header {isLogIn && currenUser}</div>
    )
  }
}

export default Header;
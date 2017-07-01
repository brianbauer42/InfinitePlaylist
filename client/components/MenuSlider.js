import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MenuSlider extends Component {
  handleMenuButtonClick(e) {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className={this.props.showMenu ? "menuContainer menuShow" : "menuContainer menuHide" }>
        <i className='fa fa-times fa-lg colorClick closeMenuButton' onClick={ e => this.handleMenuButtonClick(e) } />
        <div className="menuContent">
          <NavLink className="colorClick" to='/' onClick={ e => this.handleMenuButtonClick(e) }>Playlist</NavLink>
          <br />
          <NavLink className="colorClick" to='/admin' onClick={ e => this.handleMenuButtonClick(e) }>Admin Panel</NavLink>
          <br />
          <NavLink className="colorClick" to='/login' onClick={ e => this.handleMenuButtonClick(e) }>Login</NavLink>
          <br />
          <NavLink className="colorClick" to='/register' onClick={ e => this.handleMenuButtonClick(e) }>Register</NavLink>
          <br />
          <NavLink className="colorClick" to='/contact' onClick={ e => this.handleMenuButtonClick(e) }>Contact</NavLink>
        </div>
      </div>
    );
  }
}

export default MenuSlider;
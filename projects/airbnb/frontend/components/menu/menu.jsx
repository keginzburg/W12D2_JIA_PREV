import React from 'react';
import { Link } from 'react-router-dom';

// Dumb Component
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return this.props.currentUser ? (
      <div className='menu-box'>
        <div className='menu'>
          <div className='host-box'>
            <button>Become a Bear</button>
          </div>
          <div className='per-link-box'>
            <img src={window.smallGithub} alt="github-icon" />
          </div>
          <div className='per-link-box'>
            <img src={window.smallLinkedIn} alt="linkedin-icon" />
          </div>
          <div className='per-link-box'>
            <img className='expand' src={window.smallAngelList} alt="angelist-icon" />
          </div>
          <div className='dropdown-box'>
            <img className='menu-icon' src={window.smallMenu} alt="menu-icon" />
            <img className="profile-icon" src={window.smallBear} alt="profile-icon" />
          </div>
          {/* <h1>Welcome {this.props.currentUser.email}!</h1>
        <input onClick={this.handleLogout} type="submit" value="Logout"/> */}
        </div>
      </div>
    ) : (
      <div className='menu'>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
};

export default Menu;
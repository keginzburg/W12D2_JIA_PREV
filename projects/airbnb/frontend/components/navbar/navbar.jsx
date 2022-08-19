import React from 'react';
import { withRouter } from 'react-router-dom';

import Logo from './logo';
import SearchBar from '../search/search_bar';
import MenuContainer from '../menu/menu_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.visitRoot = this.visitRoot.bind(this);
  }

  visitRoot() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className='nav'>
        <Logo visitRoot={this.visitRoot} />
        <SearchBar />
        <MenuContainer />
      </div>
    )
  }
};

export default withRouter(NavBar);
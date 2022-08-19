import React from 'react';
import ListingsIndex from './listings/listings_index';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ListingsIndex />
      </div>
    )
  }
}

export default Main;
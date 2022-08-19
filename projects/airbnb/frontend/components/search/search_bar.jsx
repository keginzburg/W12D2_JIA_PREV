import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='search-box'>
        <div className='search-bar'>
          <div className='font-st'>
            Anywhere
          </div>
          <div className='divider'>
            
          </div>
          <div className='font-st'>
            Any week
          </div>
          <div className='divider'>
            
          </div>
          <div className='font-st font-var'>
            Add guests
          </div>
          <div className='search-box'>
            <img className='search-icon' src={window.smallSearch} alt="magnifying-glass-icon" />
          </div>
        </div>
      </div>
    )
  }
};

export default SearchBar;
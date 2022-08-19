import React from 'react';
import { Link } from 'react-router-dom';

class CategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category } = this.props;
    return (
      <li className='cat-idx-li'>
        <Link className='cat-idx-item' to='/'>
          <img className='cat-idx-item-img' src={window[category.toLowerCase()]} alt={category +
            "icon"} />
          <span className='font-var2'>{category}</span>
        </Link>
      </li>
    )
  };
};

export default CategoryIndexItem;
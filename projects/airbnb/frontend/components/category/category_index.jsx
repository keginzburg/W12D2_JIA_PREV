import React from 'react';

import CategoryIndexItem from './category_index_item';
import FilterButton from './filter_button';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.categories = ["Lakefront", "Desert", "Beach", "Farm", "Tropical", "Cave", "Arctic", "Cabin", "Castle", "Dome", "Boat", "Windmill", "Camper"];
  }

  render() {
    return (
      <div className="cat-box">
        <ul className='cat-idx'>
          {this.categories.map((category, i) => {
            return (
              <CategoryIndexItem category={category} key={category+i} />
              )
            })
          }
        </ul>
        <FilterButton />
      </div>
    )
  }
}

export default CategoryIndex;
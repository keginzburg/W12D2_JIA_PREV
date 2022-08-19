import React from "react";

class ListingsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  // Custom Function to convert integer floats into their full decimal value when String conversion occurs:
  toRating(number) {
    if (Number.isInteger(number)) {
      return number + ".0";
    } else {
      return number;
    }
  }

  render() {
    const { listing } = this.props;
    return (
      <li className="listings-idx-item">
        <div className="listings-idx-img-box">
          <img className="thumb-1" src={listing.image} alt="sample-airbnb-image" />
          {/* Heart Icon */}
          {/* <img src="" alt="" /> */}
        </div>
        <div className="listings-idx-item-info">
          <div className="listings-idx-item-head">
            <h1 className="l-h1">{listing.location}</h1>
            <h2 className="l-h2"><img src={window.smallStar} alt="" /> {this.toRating(listing.rating)}</h2>
          </div>
          <div className="listings-idx-item-addl">
            <h3 className="l-h3">{listing.miles_away} miles</h3>
            <h4 className="l-h4">{listing.availability}</h4>
            <h5 className="l-h5">${listing.price} <span className="l-night">night</span></h5>
          </div>
        </div>
      </li>
    )
  }
}

export default ListingsIndexItem;
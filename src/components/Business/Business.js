import React from 'react';
import './Business.css';

class Business extends React.Component {
  numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.image_url} alt='pizza'/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>
              {this.props.business.location.display_address[0]}<br />
              {this.props.business.location.display_address[1]}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.categories[0].title.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.numberWithCommas(this.props.business.review_count)} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;

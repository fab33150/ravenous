import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(businesses => {
            return <Business business={businesses} key={businesses.id} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;
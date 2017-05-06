import React, { Component } from 'react';

class Bubble extends Component {
  render() {
    return (
      <div className="card" style={styles.cardStyle}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  cardStyle: {
    width: '200px',
    float: 'right',
    borderRadius: '30'
  }
};

export default Bubble;

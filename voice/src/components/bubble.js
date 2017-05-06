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
    borderRadius: '30',
    float: 'right',
    maxWidth: '300px',
    padding: '13px',
    width: 'initial',
    wordWrap: 'break-word',
  }
};

export default Bubble;

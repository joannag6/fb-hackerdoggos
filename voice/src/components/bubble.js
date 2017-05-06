import React, { Component } from 'react';

class Bubble extends Component {
  render() {
    return (
      
      <div className="card" style={this.getStyles().cardStyle}>
        {this.props.children}
      </div>
    );
  }

  getStyles() {
    return ({
      cardStyle: {
        width: '200px',
        float: (this.props.isUser) ? 'right' : 'left',
        borderRadius: '30'
      }
    });
  }
}



export default Bubble;

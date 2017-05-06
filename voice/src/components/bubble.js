import React, { Component } from 'react';

class Bubble extends Component {
  render() {
    return (
      <div className="row" style={{marginBottom: '0'}}>
        <div className="card" style={this.getStyles().cardStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }

  getStyles() {
    return ({
      cardStyle: {
        width: '200px',
        float: (this.props.isUser) ? 'right' : 'left',
        borderRadius: '30',
        verticalAlign: 'middle',
        marginBottom: '0.5rem'
      }
    });
  }
}



export default Bubble;

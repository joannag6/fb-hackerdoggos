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
        borderRadius: '20px',
        float: (this.props.isUser) ? 'right' : 'left',
        verticalAlign: 'middle',
        marginBottom: '0.5rem',
        maxWidth: '600px',
        padding: '10px',
        width: 'initial',
        wordWrap: 'break-word'
      }
    });
  }
}



export default Bubble;

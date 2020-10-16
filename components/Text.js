import React, { Component } from 'react';

class Text extends Component {
  render() {
    const {
      tag, style, text, className, children, ...other
    } = this.props;
    return (
      React.createElement(
        `${tag}`,
        {
          className: `${className || ''}`,
          style,
          ...other
        },
        text || children
      )
    );
  }
}

export default Text;
import React, { Component } from 'react';
class Image extends Component {
    state = {  }
    render() { 
        return ( <img src={this.props.src} /> );
    }
}
 
export default Image;
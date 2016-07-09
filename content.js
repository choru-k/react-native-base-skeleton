'use strict';

import React, { Component } from 'react';
import {ScrollView} from 'react-native';


export default class Content extends Component {

	render() {
    let defaulContentContainerStyle= {
      padding: 10,
    }
    let defaultStyle = {
      flex : 1,
      backgroundColor: '#fff'
    }
		return(
			<ScrollView
        style=
        {
          this.props.style
          ? this.props.style
          : defaultStyle
        }
        contentContainerStyle=
        {this.props.defaulContentContainerStyle
          ? this.props.contentContainerStyle
          : defaulContentContainerStyle}
          >
          {this.props.children}
        </ScrollView>
		);
	}
}

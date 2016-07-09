'use strict';

import React, { Component } from 'react';
import {View} from 'react-native';

export default class Footer extends Component {

    getInitialStyle() {
        return {
            navbar: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                height: 55,
                flexDirection: 'row'
            }
        }
    }

    render() {

        return(
            <View style={
                this.props.style ?
                this.props.style :
                this.getInitialStyle().navbar
              }>
                {this.props.children}
            </View>
        );
    }
}

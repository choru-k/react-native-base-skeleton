'use strict';

import React, { Component } from 'react';
import {View, Platform} from 'react-native';

export default class Header extends Component {

    getInitialStyle() {
        return {
              navbar: {
                backgroundColor: '#0AA',
                justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingTop: (Platform.OS === 'ios' ) ? 15 : 0,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.1,
                shadowRadius: 1.5,
                height: (Platform.OS === 'ios' ) ? 70 : 55,
                elevation: 2
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

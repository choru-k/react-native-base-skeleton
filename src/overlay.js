'use strict';

import React, { Component } from 'react';
import {View} from 'react-native';

export default class Footer extends Component {

    render() {

        return(
            <View style={
                this.props.style ?
                this.props.style :
                { flex: 0 }
              }>
                {this.props.children}
            </View>
        );
    }
}

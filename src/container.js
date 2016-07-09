'use strict';

import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Overlay from './overlay';
import _ from 'lodash';

export default class Container extends Component {

	renderHeader() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && item.type == Header) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && this.props.children.type == Header) {
				return this.props.children;
			}
		}
	}
	renderContent() {
		if(Array.isArray(this.props.children)) {

			return _.find(this.props.children, function(item) {
				if(item && (item.type == Content)) {

					return true;
				}
			});
		}

		else {
			if(this.props.children && (this.props.children.type == Content)) {
				return this.props.children;
			}
		}
	}
	renderFooter() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && item.type == Footer) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && this.props.children.type == Footer) {
				return this.props.children;
			}
		}
	}
	renderOverlay() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && item.type == Overlay) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && this.props.children.type == Overlay) {
				return this.props.children;
			}
		}
	}
	render() {
		return(
			<View style={{flex: 1}}>

				<View>
					{this.renderHeader()}
				</View>


				<View style={{flex:1}}>
					{this.renderContent()}
				</View>

				<View>
					{this.renderFooter()}
				</View>

				<View style={{flex: 0}}>
					{this.renderOverlay()}
				</View>
			</View>
		);

	}

}

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
				if(item && (item.type == Header || item.props.header)) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && (this.props.children.type == Header || this.props.children.props.header) {
				return this.props.children;
			}
		}
	}
	renderContent() {
		if(Array.isArray(this.props.children)) {

			return _.find(this.props.children, function(item) {
				if(item && (item.type == Content || item.props.content)) {

					return true;
				}
			});
		}

		else {
			if(this.props.children && (this.props.children.type == Content || this.props.children.props.content)) {
				return this.props.children;
			}
		}
	}
	renderFooter() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && (item.type == Footer || item.props.footer)) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && (this.props.children.type == Footer || this.props.children.props.footer)) {
				return this.props.children;
			}
		}
	}
	renderOverlay() {
		if(Array.isArray(this.props.children)) {
			return _.find(this.props.children, function(item) {
				if(item && (item.type == Overlay || item.props.overlay)) {
					return true;
				}
			});
		}

		else {
			if(this.props.children && (this.props.children.type == Overlay || this.props.children.props.overlay)) {
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

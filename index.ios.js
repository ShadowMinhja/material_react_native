/**
 * Material React Native
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native'

import { Toolbar as MaterialToolbar } from 'react-native-material-design';
import styles from './src/content/styles';

import Navigate from './src/utils/Navigate';
import Toolbar from './src/components/Toolbar';
var drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

import RNDrawer from 'react-native-drawer';
import Navigation from './src/components/Navigation';

var deviceScreen = require('Dimensions').get('window');
import tweens from './tweens';

var counter = 0
class material_react_native extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      drawerTypes: ['overlay', 'displace', 'static'],
      drawer: null,
      navigator: null,
      drawerType: 'overlay',
      openDrawerOffset:100,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panStartCompensation: true,
      openDrawerThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: true,
      acceptTap: false,
      acceptPan: true,
      rightSide: false
    }; 
  }
  
  setDrawer = (drawer) => {
    this.setState({
      drawer
    });
  };

  setNavigator = (navigator) => {
		this.setState({
			navigator: new Navigate(navigator)      
		});    
	};

  tweenHandler = (ratio) => {
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  };

  noopChange = () => {
    this.setState({
      changeVal: Math.random()
    })
  };

  setStateFrag = (frag) => {
    this.setState(frag)
  };
  
  render() {    
    var navView = <Navigation navigator={this.state.navigator} closeDrawer={() => {this.state.drawer.close()}} />

    return (
      <RNDrawer
        ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
        type={this.state.drawerType}
        animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panStartCompensation={this.state.panStartCompensation}
        openDrawerThreshold={this.state.openDrawerThreshold}
        content={navView}
        styles={drawerStyles}
        disabled={this.state.disabled}
        tweenHandler={this.tweenHandler}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        changeVal={this.state.changeVal}
        negotiatePan={false}
        side={this.state.rightSide ? 'right' : 'left'}        
        >
        <Navigator
          openDrawer={() => {this.state.drawer.open()}}
          closeDrawer={() => {this.state.drawer.close()}}
          initialRoute={Navigate.getInitialRoute()}
          navigationBar={ <Toolbar onIconPress={() => {this.state.drawer.open()}} /> }
          configureScene={() => {
              return Navigator.SceneConfigs.FadeAndroid;
          }}
          ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
          navigator={this.state.navigator}
          renderScene={(route) => {
            if (this.state.navigator && route.component) {
                return (
                    <View
                        style={styles.scene}
                        showsVerticalScrollIndicator={false}>                      
                      <route.component navigator={this.state.navigator} title={route.title} path={route.path} {...route.props}                        
                        
                        />
                    </View>
                );
            }
          }}
				/>
      </RNDrawer>
    );
  }
}

AppRegistry.registerComponent('material_react_native', () => material_react_native);

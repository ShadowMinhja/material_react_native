import React, {Component} from 'react';
var ReactNative = require('react-native')
var {
  View,
  Text,
  TouchableHighlight
} = ReactNative

var styles = require('../content/styles')

class Button extends Component{

  render(){
    return(
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}



module.exports = Button;

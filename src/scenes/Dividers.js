import React, {Component} from 'react';
var ReactNative = require('react-native')
var {
  View  
} = ReactNative
import { Subheader, Divider } from 'react-native-material-design';

export default class Subheaders extends Component {

    render() {
        return (
            <View>
                <Subheader text="Normal Divider"/>
                <Divider />
                <Subheader text="Divider with inset"/>
                <Divider inset />
            </View>
        );
    }
}

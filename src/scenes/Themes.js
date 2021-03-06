import React, {Component} from 'react';
var ReactNative = require('react-native')
var {
  TouchableHighlight, View, Text 
} = ReactNative
import { Subheader, COLOR, PRIMARY_COLORS } from 'react-native-material-design';

import AppActions from '../actions/AppActions';

export default class Themes extends Component {

    changeTheme = (theme) => {
        AppActions.updateTheme(theme);
    };

    render() {
        return (
            <View>
                <Subheader text="Select a theme"/>
                <View style={styles.container}>
                    {PRIMARY_COLORS.map((color) => {
                        return (
                            <TouchableHighlight key={color} onPress={() => { this.changeTheme(color) }}>
                                <View  style={[styles.item, { backgroundColor: COLOR[`${color}500`].color }]}>
                                    <Text style={styles.text}>{color}</Text>
                                </View>
                            </TouchableHighlight>
                        );
                    })}
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        width: 120,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff'
    }
};
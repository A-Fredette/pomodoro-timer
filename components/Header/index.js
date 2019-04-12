import React from 'react'
import {
    View,
    Text,
    StyleSheet
    } from 'react-native';

const styles = StyleSheet.create({
    headingText: {
        color: 'blue',
        fontWeight: 'bold',
        paddingTop: 50,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        fontSize: 20
    },
});

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.headingText}>
                <Text>Pomodoro Timer</Text>
            </View>

        )
    }
}
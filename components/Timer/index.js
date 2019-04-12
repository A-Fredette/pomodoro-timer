import React from 'react';
import {
    Text,
    View,
    Button } from 'react-native';

export default class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: '2500'
        }
    }

    render() {
        return(
            <View>
                <Text>this.state.time</Text>
                <Button
                    onPress={}
                    title="5 min"
                    color="#841584"
                    accessibilityLabel="Start a 5 minute timer."
                />
                <Button
                    onPress={}
                    title="25 min"
                    color="#841584"
                    accessibilityLabel="Start a 25 minute timer."
                />
            </View>
        )
    }
}
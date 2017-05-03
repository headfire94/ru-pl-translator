import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Expo from 'expo';
import {StyleProvider} from 'native-base';
import AppNavigator from './AppNavigator';
import configureStore from './configureStore';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

class Root extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            isReady: false,
            store: configureStore(() => this.setState({isLoading: false}))
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady || this.state.isLoading) {
            return null
        }

        return (
            <StyleProvider style={getTheme(platform)}>
                <Provider store={this.state.store}>
                    <AppNavigator />
                </Provider>
            </StyleProvider>
        );
    }
}

export default Root;
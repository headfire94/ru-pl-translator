import React, {Component} from 'react';
import {StatusBar, Container} from 'react-native';
import {connect} from 'react-redux';
import {Router, Scene} from 'react-native-router-flux';
import {Constants} from 'expo';

import Home from './components/Home';
import ToLearn from './components/ToLearn';

class AppNavigator extends Component {

    render() {
        return (
            <Router sceneStyle={{flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: '#000'}}>
                <Scene key="root" hideNavBar>
                    <Scene key="home" component={Home} initial/>
                    <Scene key="toLearn" component={ToLearn}/>
                </Scene>
            </Router>
        );
    }
}

export default AppNavigator;
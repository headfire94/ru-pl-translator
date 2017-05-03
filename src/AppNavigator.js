import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {Drawer} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';

import Home from './components/Home/index';
import SideBar from './components/SideBar/index';

const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {
    openDrawer() {
        this._drawer._root.open();
    }

    closeDrawer() {
        this._drawer._root.close();
    }

    render() {
        return (
            <Drawer
                ref={(ref) => {
                    this._drawer = ref;
                }}
                type="overlay"
                tweenDuration={150}
                content={<SideBar />}
                tapToClose
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                styles={{
                    drawer: {
                        shadowColor: '#000000',
                        shadowOpacity: 0.8,
                        shadowRadius: 3
                    }
                }}
                tweenHandler={(ratio) => {  //eslint-disable-line
                    return {
                        drawer: {shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5},
                        main: {
                            opacity: (2 - ratio) / 2
                        }
                    };
                }}
                negotiatePan
            >
                <StatusBar
                    barStyle="default"
                />
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="home" component={Home} initial/>
                    </Scene>
                </RouterWithRedux>
            </Drawer>
        );
    }
}

export default connect(null)(AppNavigator);
import React, { Component } from 'react';
import { Content, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './style';

class SideBar extends Component {
  render() {
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={() => { Actions.home()}} >
          <Text>Home</Text>
        </ListItem>
      </Content>
    );
  }
}


export default SideBar;

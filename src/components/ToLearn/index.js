import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import {removeFromLearn} from '../../actions/knowledge';

import {
    Container,
    Content,
    Icon,
    Button,
    Header,
    Left,
    Title,
    Right,
    Body,
    List,
    ListItem,
    Text
} from 'native-base';
import styles from './styles';

class ToLearn extends Component {
    static propTypes = {
        knowledge: PropTypes.array.isRequired
    };

    render() {
        const {knowledge} = this.props;

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.home()}>
                            <Icon active name="ios-chatboxes"/>
                        </Button>
                    </Left>

                    <Body>
                    <Title>{(this.props.name) ? this.props.name : 'To Learn'}</Title>
                    </Body>
                </Header>
                <Content style={styles.content}>
                    <List>
                        {
                            knowledge.map(item => <ListItem
                                key={item.id}>
                                <Text>{item.text}</Text>
                                <Right>
                                    <Button onPress={() => this.props.removeFromLearn(item.id)}
                                            transparent>
                                        <Icon name="ios-trash"/>
                                    </Button>
                                </Right>
                            </ListItem>)
                        }
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    const {knowledge} = state;

    return {
        knowledge
    }
};

export default connect(mapStateToProps, {removeFromLearn})(ToLearn);

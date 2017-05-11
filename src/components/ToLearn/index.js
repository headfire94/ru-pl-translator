import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Clipboard} from 'react-native';

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
    Text,
    Toast
} from 'native-base';

class ToLearn extends Component {
    static propTypes = {
        knowledge: PropTypes.array.isRequired
    };

    _setClipboardContent = async text => {
        Clipboard.setString(text);

        Toast.show({
            text: 'Copied',
            position: 'top',
            buttonText: 'Okay',
            duration: 600
        });
    };

    render() {
        const {knowledge} = this.props;

        return (
            <Container>
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
                <Content>
                    <List>
                        {
                            knowledge.map(item => <ListItem
                                key={item.id}>
                                <Body><Text>{item.text}</Text></Body>
                                <Right>
                                    <Button onPress={() => this._setClipboardContent(item.text)}
                                            transparent>
                                        <Icon name="ios-clipboard-outline"/>
                                    </Button>
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

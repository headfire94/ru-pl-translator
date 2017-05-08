import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import SearchInput from '../SearchInput';
import {searchHandler} from '../../actions/translator';
import {RUSSIAN, ENGLISH, POLISH} from '../../constants/languages';

import {Container, Content, Icon, Button, Header, Left, Text, Title, Right, Body} from 'native-base';
class Home extends Component {
    static propTypes = {
        russian: PropTypes.string,
        search: PropTypes.func,
        polish: PropTypes.string,
        english: PropTypes.string
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.toLearn()}>
                            <Icon active name="book" />
                        </Button>
                    </Left>

                    <Body>
                    <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>
                    </Body>
                </Header>
                <Content>
                    <SearchInput
                        onSubmitEditing={() => {
                            this.refs.secondInput.input._root.focus();
                        }}
                        ref="firstInput"
                        onChange={text => this.props.onSearchRussian(text)}
                        placeholder="Русский"
                        value={this.props.russian}
                        autoFocus={true}/>
                    <SearchInput
                        ref="secondInput"
                        onChange={text => this.props.onSearchEnglish(text)}
                        onSubmitEditing={() => {
                            this.refs.thirdInput.input._root.focus();
                        }}
                        value={this.props.english}
                        placeholder="English"/>
                    <SearchInput
                        ref="thirdInput"
                        value={this.props.polish}
                        onChange={text => this.props.onSearchPolish(text)}
                        onSubmitEditing={() => {
                            this.refs.firstInput.input._root.focus();
                        }}
                        placeholder="Polscie"/>

                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        onSearchRussian: text => dispatch(searchHandler(RUSSIAN)(text)),
        onSearchEnglish: text => dispatch(searchHandler(ENGLISH)(text)),
        onSearchPolish: text => dispatch(searchHandler(POLISH)(text))
    };
}

const mapStateToProps = state => {
    const {translator: {russian, english, polish}} = state;

    return {
        russian,
        english,
        polish
    }
};

export default connect(mapStateToProps, bindAction)(Home);

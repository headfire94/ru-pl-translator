import React, {
    Component,
    PropTypes
} from 'react';
import {connect} from 'react-redux';
import {addToLearn} from '../../actions/knowledge';
import {InputGroup, Input, Icon, Button} from 'native-base';

class SearchInput extends Component {
    constructor() {
        super();

        this.handleOnAdd = this.handleOnAdd.bind(this);
    }

    static propTypes = {
        autoFocus: PropTypes.bool,
        onSubmitEditing: PropTypes.func,
        placeholder: PropTypes.string,
        onAdd: PropTypes.func,
        onChange: PropTypes.func,
        value: PropTypes.string
    };

    handleOnAdd() {
        const value = this.props.value;

        if (value) {
            this.props.addToLearn(value);
        }
    }

    render() {
        return (
            <InputGroup iconRight>
                <Input autoFocus={this.props.autoFocus}
                       returnKeyType="next"
                       ref={input => this.input = input}
                       onChangeText={text => this.props.onChange(text)}
                       onSubmitEditing={this.props.onSubmitEditing}
                       value={this.props.value}
                       placeholder={this.props.placeholder}/>
                <Button onPress={this.handleOnAdd}
                        transparent
                        primary>
                    <Icon active name='ios-add'/>
                </Button>

            </InputGroup>
        );
    }
}

export default connect(null, {addToLearn})(SearchInput);

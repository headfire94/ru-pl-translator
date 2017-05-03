import React, {
    Component,
    PropTypes
} from 'react';
import {InputGroup, Input, Icon, Button} from 'native-base';

class SearchInput extends Component {
    static propTypes = {
        autoFocus: PropTypes.bool,
        onSubmitEditing: PropTypes.func,
        placeholder: PropTypes.string,
        onAdd: PropTypes.func,
        onChange: PropTypes.func,
        value: PropTypes.string
    };

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
                <Button onPress={this.props.onAdd}
                        transparent
                        primary>
                    <Icon active name='ios-add'/>
                </Button>

            </InputGroup>
        );
    }
}

export default SearchInput;

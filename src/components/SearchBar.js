import React, { Component } from 'react';
import { Input, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { searchFile, selectModule } from '../actions';

class connectedSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
    }

    fieldChangeHandler(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const dispatch = this.props.dispatch;
        return (
            <div>
                <Input
                    name='search'
                    type='text'
                    value={this.state.search}
                    onChange={this.fieldChangeHandler}
                    label='search'
                ></Input>
                <IconButton
                    children={<SearchIcon />}
                    onClick={e => {
                        dispatch(selectModule(-1));
                        dispatch(searchFile(this.state.search));
                    }}
                />
            </div>
        )
    }
}

const SearchBar = connect()(connectedSearchBar);
export default SearchBar;
import React, { Component } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
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

            <Paper >
                <InputBase
                    name='search'
                    value={this.state.search}
                    onChange={this.fieldChangeHandler}
                    placeholder="Search for files"
                // inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton
                    aria-label="search"
                    onClick={e => {
                        dispatch(selectModule(-1));
                        dispatch(searchFile(this.state.search));
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        )
    }
}

const SearchBar = connect()(connectedSearchBar);
export default SearchBar;
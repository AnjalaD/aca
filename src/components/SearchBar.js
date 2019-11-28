import React, { Component } from 'react';
import { InputBase, AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade, withStyles } from "@material-ui/core/styles";

import { connect } from 'react-redux';
import { searchFile, selectModule } from '../actions';


const styles = {
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: "16px"
    },
    title: {
        flexGrow: 1,
        display: "none",
        "@media(min-width: 600px)": {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: "4px",
        backgroundColor: fade("#fff", 0.15),
        "&:hover": {
            backgroundColor: fade("#fff", 0.25)
        },
        marginLeft: 0,
        width: "100%",
        "@media(min-width: 600px)": {
            marginLeft: "8px",
            width: "auto"
        }
    },
    searchIcon: {
        width: "56px",
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: "8px 8px 8px 56px",
        transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        width: "100%",
        "@media(min-width: 600px)": {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    }
};
class styledSearchBar extends Component {

    render() {
        const dispatch = this.props.dispatch;
        return (
            <AppBar position="fixed">
                <Toolbar>
                    <Typography className={this.props.classes.title} variant="h6" noWrap>
                        Aca
                    </Typography>
                    <div className={this.props.classes.search}>
                        <div className={this.props.classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search Files…"
                            classes={{
                                root: this.props.classes.inputRoot,
                                input: this.props.classes.inputInput
                            }}
                            onKeyUp={e => {
                                dispatch(selectModule(-1));
                                dispatch(searchFile(e.target.value));
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
const connectedSearchBar = withStyles(styles)(styledSearchBar)
const SearchBar = connect()(connectedSearchBar);
export default SearchBar;


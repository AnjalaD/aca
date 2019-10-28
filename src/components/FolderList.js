import React, { Component } from 'react';
import Folder from './Folder';
import { connect } from 'react-redux';
import { List, ListSubheader } from '@material-ui/core';

const mapStateToProps = state => ({
    tree: state.tree.fileTree
});

class connectedFolderList extends Component {

    componentDidUpdate() {

    }

    render() {
        let counter = 0;
        // console.log('folderlist', this.props.tree);
        const folders = this.props.tree.map(
            f => <Folder data={f} key={counter++} />
        );
        return (
            <div>
                <List
                    subheader={
                        <ListSubheader
                            color="primary"
                            inset={true}
                        >
                            Moudules
                        </ListSubheader>
                    }
                >
                    {folders}
                </List>
            </div>
        )
    }
}

const FolderList = connect(mapStateToProps)(connectedFolderList);
export default FolderList;
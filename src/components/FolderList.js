import React, { Component } from 'react';
import Folder from './Folder';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    tree: state.tree.fileTree
});

class connectedFolderList extends Component {

    componentDidUpdate() {

    }

    render() {
        let counter = 0;
        console.log('folderlist', this.props.tree);
        const folders = this.props.tree.map(
            f => <Folder data={f} key={counter++} />
        );
        return (
            <div>
                {folders}
            </div>
        )
    }
}

const FolderList = connect(mapStateToProps)(connectedFolderList);
export default FolderList;
import React, { Component } from 'react';
import File from './File';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    tree: state.tree
});


class connectedFileList extends Component {

    // componentDidUpdate() {
    //     const f = this.props.tree.selectedModule;
    //     return f;
    // }

    render() {
        const { selectedModule, fileTree } = this.props.tree;
        let counter = 0;
        let files = null;

        if (selectedModule === -1) {
            files = <p>Select a module.</p>
        } else {
            const moduleFiles = fileTree.filter(mod => mod.module_id === selectedModule)[0].documents;
            console.log('FileList', moduleFiles);

            if (moduleFiles.length === 0) {
                files = <p>No files available..</p>
            } else {
                files = moduleFiles.map(fileData =>
                    <File data={fileData} key={counter++} />
                );
            }
        }
        return (
            <div>
                {files}
            </div>
        )
    }
}

const FileList = connect(mapStateToProps)(connectedFileList);
export default FileList;
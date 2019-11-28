import React, { Component } from 'react';
import File from './File';
import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";

const mapStateToProps = state => ({
    tree: state.tree
});


class connectedFileList extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0 };
    }

    handleClick(offset) {
        console.log(offset);
        this.setState({ offset });
    }

    render() {
        const { selectedModule, fileTree } = this.props.tree;
        let counter = 0;
        let files = null;
        let moduleFiles = [];

        if (selectedModule === -1) {
            files = <p>Select a module.</p>
        } else {
            moduleFiles = fileTree.filter(mod => mod.module_id === selectedModule)[0].documents;
            // console.log(moduleFiles.length);

            if (moduleFiles.length === 0) {
                files = <p>No files available..</p>
            } else {
                files = [];
                const end = (this.state.offset + 10) > moduleFiles.length ? moduleFiles.length : (this.state.offset + 10);
                for (let i = this.state.offset; i < end; i++) {
                    files.push(
                        <Grid item xs={6} md={4} lg={3} key={counter++}>
                            <File data={moduleFiles[i]} />
                        </Grid>
                    );
                }
            }
        }
        return (
            <Box
                p={1}
            >
                <Grid
                    container
                    direction="column"
                >
                    <Box
                        minHeight={600}
                    >
                        <Grid
                            container
                            spacing={2}

                        >
                            {files}
                        </Grid>
                    </Box>
                    <Grid container justify="center">
                        <Grid item>
                            <Pagination
                                currentPageColor="secondary"
                                otherPageColor="default"
                                limit={10}
                                offset={this.state.offset}
                                total={moduleFiles.length}
                                onClick={(e, offset) => this.handleClick(offset)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box >

        )
    }
}

const FileList = connect(mapStateToProps)(connectedFileList);
export default FileList;
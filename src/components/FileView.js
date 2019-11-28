import React from 'react';
import { Slide, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Comments from './Comments';
import FileLinks from './FileLinks';
import TabView from './TabView';

const mapStateToProps = (state) => ({
    files: state.file.files,
    selected: state.file.selected
})

const connectedFileView = ({ files, selected, dispatch }) => {
    const content = (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Grid
                container
                direction="column"
            >
                <Grid
                    container
                    direction="row"
                    justify="center"
                >
                    <Grid item xm={12} sm={12} md={9}>
                        <TabView />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FileLinks />
                    </Grid>
                </Grid>
                <Grid item sm={12} xm={12} md={9}>
                    <Comments />
                </Grid>
            </Grid>
        </Slide>
    );

    let display = '';
    if (files === null || files.length === 0) {

    } else {
        display = content;
    }

    return (
        <div>
            {display}
        </div>
    )
}

const FileView = connect(mapStateToProps)(connectedFileView);

export default FileView;

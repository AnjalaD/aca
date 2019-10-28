import React from 'react';
import { Box, Slide, Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
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
                alignItems="center"
            >
                <Grid
                    container
                    direction="row"
                    justify="center"
                >
                    <Grid item sm={11} md={8}>
                        <Box>
                            <Paper
                                square
                                bgcolor="secondary.main"
                            >
                                <TabView />
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={11} md={3}>
                        <FileLinks />
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <Comments />
                    <CommentForm />
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

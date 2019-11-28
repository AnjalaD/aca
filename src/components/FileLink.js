import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectFile } from '../actions';

const connectedFileLink = ({ data, dispatch }) => {
    const { document_name, description } = data;
    return (
        <Box p={2}>
            <Grid container direction="column">
                <Grid container direction="row">
                    <Grid item xs={9}>
                        <Typography variant="h6">
                            {document_name}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Button onClick={e => dispatch(selectFile(data))}>
                            Goto
                    </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
};

const FileLink = connect()(connectedFileLink);
export default FileLink;

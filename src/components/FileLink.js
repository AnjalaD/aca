import React from 'react';
import { Paper, Typography, Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectFile } from '../actions';

const connectedFileLink = ({ data, dispatch }) => {
    const { document_name, description } = data;
    return (
        <Grid container direction="column">
            <Grid xs={12} container direction="row" justify="space-between" >
                <Typography variant="h6" >
                    File 1
                        <Button onClick={e => dispatch(selectFile(data))}>
                        Goto
                    </Button>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2">
                    augffuhawbckasmcnask,dnasidqwasjcncascaasxzcxc
                    augffuhawbckasmcnask,dnasidqwasjcncascaasxzcxc
                </Typography>
            </Grid>
        </Grid>
    )
};

const FileLink = connect()(connectedFileLink);
export default FileLink;

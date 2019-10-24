import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectFile } from '../actions';

const connectedFileLink = ({ data, dispatch }) => {
    const { document_name } = data;
    return (
        <Paper>
            <Typography>{document_name}</Typography>
            <Button
                onClick={e => dispatch(selectFile(data))}
            >
                Goto
            </Button>
        </Paper>
    )
};

const FileLink = connect()(connectedFileLink);
export default FileLink;

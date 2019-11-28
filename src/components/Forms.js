import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import FileAddForm from './FileAddForm';
import ModuleAddForm from './ModuleAddForm';

export default class Forms extends Component {
    render() {
        return (
            <Grid container justify="center">
                <FileAddForm />
                <ModuleAddForm />
            </Grid>
        )
    }
}

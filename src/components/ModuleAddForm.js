import React, { Component } from 'react'
import HOST from '../config';
import { TextField, Button, FormGroup, Box, Grid, Paper } from '@material-ui/core';

class ModuleAddForm extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                module_name: '',
                module_code: '',
            },
            modules: [],
            documents: [],
            linked: [],
            focused: true,
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
    }


    fieldChangeHandler(e) {
        // console.log('oncahnege event', e);
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    submitHandler(e, document_id) {
        e.preventDefault();
        const module_data = {
            module_data: this.state.data
        };
        fetch(HOST + '/modules/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(module_data)
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Grid item xs={12} md={4}>
                <Box p={2}>
                    <Paper>
                        <Box p={2}>
                            <FormGroup
                                onSubmit={e => this.submitHandler(e, this.props.selected)}
                            >
                                <TextField
                                    label="Module Name"
                                    margin="dense"
                                    variant="outlined"
                                    name='module_name'
                                    type='text'
                                    value={this.state.data.module_name}
                                    onChange={this.fieldChangeHandler}
                                    autoComplete="off"
                                ></TextField>
                                <TextField
                                    label="Module Code"
                                    margin="dense"
                                    variant="outlined"
                                    name='document_url'
                                    type='text'
                                    value={this.state.data.module_code}
                                    onChange={this.fieldChangeHandler}
                                    autoComplete="off"
                                ></TextField>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                >
                                    Add Module
                            </Button>
                            </FormGroup>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        )
    }
}

export default ModuleAddForm; 

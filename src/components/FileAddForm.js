import React, { Component } from 'react'
import HOST from '../config';
import Select from 'react-select';
import { TextField, Button, FormGroup, Box, Grid, Paper } from '@material-ui/core';

class FileAddForm extends Component {
    constructor() {
        super();
        this.state = {
            doc: {
                document_name: '',
                module_id: null,
                document_url: '',
                description: ''
            },
            loaded: false,
            modules: [],
            documents: [],
            linked: [],
            focused: false,
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.selectOnClick = this.selectOnClick.bind(this);
    }

    componentDidUpdate() {
        if (!this.state.loaded && this.state.focused) {
            // console.log('update fileaddform');
            fetch(HOST + '/modules/all', {
                method: 'POST'
            })
                .then(res => res.json())
                .then(
                    res => this.setState({
                        modules: res.data.map(
                            m => ({
                                label: m.module_code + ' ' + m.module_name,
                                value: m.id
                            })
                        ),
                        loaded: true,
                    })
                )
                .catch(err => console.log(err))
        }

    }

    fieldChangeHandler(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    selectOnClick() {
        // console.log('clicked', this.state.focused);
        if (!this.state.focused) {
            this.setState({
                focused: true
            });
        }
    }

    selectChangeHandler(e) {
        console.log('onchange event', e.value);
        this.setState({
            doc: {
                module_id: e.value
            }
        });
        console.log(this.state.doc.module_id)
    }

    submitHandler(e) {
        e.preventDefault();
        const doc = {
            doc: this.state.doc
        };
        fetch(HOST + '/documents/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(doc)
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        // console.log('modules', this.state.modules);
        return (
            <Grid item xs={12} md={4}>
                <Box p={2}>
                    <Paper>
                        <Box p={2}>
                            <FormGroup
                                onSubmit={e => this.submitHandler(e, this.props.selected)}
                            >
                                <TextField
                                    label="Document Name"
                                    margin="dense"
                                    variant="outlined"
                                    name='document_name'
                                    type='text'
                                    value={this.state.doc.document_name}
                                    onChange={this.fieldChangeHandler}
                                    autoComplete="off"
                                ></TextField>
                                <TextField
                                    label="Document Link"
                                    margin="dense"
                                    variant="outlined"
                                    name='document_url'
                                    type='text'
                                    value={this.state.doc.document_url}
                                    onChange={this.fieldChangeHandler}
                                    autoComplete="off"
                                ></TextField>
                                <TextField
                                    multiline
                                    rows="3"
                                    label="Description"
                                    margin="dense"
                                    variant="outlined"
                                    name='description'
                                    type='text'
                                    value={this.state.doc.description}
                                    onChange={this.fieldChangeHandler}
                                    autoComplete="off"
                                ></TextField>
                                <Box pt={1} pb={1}>
                                    <Select
                                        TextFieldProps={{
                                            label: 'Modules',
                                            InputLabelProps: {
                                                shrink: true,
                                            },
                                        }}
                                        placeholder="Select a module.."
                                        name='module_id'
                                        options={this.state.modules}
                                        value={this.state.doc.module_id}
                                        onChange={this.selectChangeHandler}
                                        onMenuOpen={this.selectOnClick}
                                        isLoading={!this.state.loaded}
                                        isClearable={true}
                                    />
                                </Box>
                                <Box pt={1} pb={1}>
                                    <Select
                                        TextFieldProps={{
                                            label: 'Link Documents',
                                            InputLabelProps: {
                                                shrink: true,
                                            },
                                        }}
                                        placeholder="Linked documents.."
                                        name='linked'
                                        options={this.state.documents}
                                        value={this.state.linked}
                                        onChange={this.fieldChangeHandler}
                                        isMulti
                                    />
                                </Box>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                >
                                    Add Document
                            </Button>
                            </FormGroup>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        )
    }
}

export default FileAddForm; 

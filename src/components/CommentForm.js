import React, { Component } from 'react'
import HOST from '../config';
import { connect } from 'react-redux';
import { TextField, Button, Box, Grid, FormControl } from '@material-ui/core';

const mapStateToProps = ({ file }) => ({
    selected: file.selected
});

class connectedCommentForm extends Component {
    constructor() {
        super();
        this.state = {
            author_name: '',
            description: ''
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
    }

    fieldChangeHandler(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    submitHandler(e, document_id) {
        e.preventDefault();
        const comment = {
            comment: {
                document_id: document_id,
                author_name: this.state.author_name,
                description: this.state.description
            }
        };
        fetch(HOST + '/comments/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment)
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Box p={2}>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth>
                            <TextField
                                label="Name"
                                margin="dense"
                                variant="outlined"
                                name='author_name'
                                type='text'
                                value={this.state.author_name}
                                onChange={this.fieldChangeHandler}
                                autoComplete="off"
                            ></TextField>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <FormControl fullWidth>
                            <TextField
                                multiline
                                label="Comment"
                                margin="dense"
                                variant="outlined"
                                name='description'
                                type='text'
                                value={this.state.description}
                                onChange={this.fieldChangeHandler}
                                autoComplete="off"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={e => this.submitHandler(e, this.props.selected)}
                        >
                            Add Comment
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

const CommentForm = connect(mapStateToProps)(connectedCommentForm);
export default CommentForm; 

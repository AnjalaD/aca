import React, { Component } from 'react'
import HOST from '../config';
import { connect } from 'react-redux';
import { TextField, Button, FormGroup } from '@material-ui/core';

const mapStateToProps = ({ file }) => ({
    selected: file.selected
});

class connectsCommentForm extends Component {
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
            <FormGroup
                onSubmit={e => this.submitHandler(e, this.props.selected)}
            >
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
                <TextField
                    multiline
                    rows="3"
                    label="Comment"
                    margin="dense"
                    variant="outlined"
                    name='description'
                    type='text'
                    value={this.state.description}
                    onChange={this.fieldChangeHandler}
                    autoComplete="off"
                ></TextField>
                <Button
                    variant="outlined"
                    color="primary"
                >
                    Add Comment
                </Button>
            </FormGroup>
        )
    }
}

const CommentForm = connect(mapStateToProps)(connectsCommentForm);
export default CommentForm; 

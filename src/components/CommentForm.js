import React, { Component } from 'react'

export default class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            document_id: 1,
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

    submitHandler(e) {
        e.preventDefault();
        const comment = {
            comment: this.state
        };
        fetch('https://ancient-bobcat-26.localtunnel.me/comments/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment)
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    name='author_name'
                    type='text'
                    value={this.state.author_name}
                    onChange={this.fieldChangeHandler}
                ></input>
                <input
                    name='description'
                    type='text'
                    value={this.state.description}
                    onChange={this.fieldChangeHandler}
                ></input>
                <button>Add Comment</button>
            </form>
        )
    }
}

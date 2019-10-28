import React, { Component } from 'react';
import Comment from './Comment';
import { CircularProgress, Typography } from '@material-ui/core';
import HOST from '../config';
import { connect } from 'react-redux';
import { addComments } from '../actions';

const mapStateToProps = ({ file }) => ({
    selected: file.selected,
    comments: file.comments
});

class connectedComments extends Component {
    constructor() {
        super();
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.props.selected
            })
        }
        // console.log('comments on mount', options.body);

        fetch(HOST + '/comments', options)
            .then(res => res.json())
            .then(res => { this.props.dispatch(addComments(res.data)); console.log(res.data) })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        if (this.props.comments === null) {
            this.fetchData();
        }
    }

    render() {
        const loading = (
            <div>
                <CircularProgress />
                <p>Loading...</p>
            </div>
        );

        const noComments = <Typography>No comments</Typography>;

        let display = loading;
        let key = 0;
        const comments = this.props.comments;

        if (comments === null) {
            display = loading;
        } else if (comments.length === 0) {
            display = noComments;
        } else if (comments.length > 0) {
            display = comments.map(
                comment => <Comment data={comment} key={key++} />
            );
        }

        return (
            <div>
                {display}
            </div>
        )
    }
}
const Comments = connect(mapStateToProps)(connectedComments);
export default Comments;
import React, { Component } from 'react';
import Comment from './Comment';
import { CircularProgress, Typography } from '@material-ui/core';
import HOST from '../config';
import { connect } from 'react-redux';

const mapStateToProps = ({ file }) => ({
    selected: file.selected
});

class connectedComments extends Component {
    constructor() {
        super();
        this.state = {
            comments: null
        }
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
            .then(res => { this.setState({ comments: res.data }); console.log(res.data) })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        this.fetchData();
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

        if (this.state.comments !== null && this.state.comments.length === 0) {
            display = noComments;
        } else if (this.state.comments !== null && this.state.comments.length > 0) {
            display = this.state.comments.map(
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
import React, { Component } from 'react';
import Comment from './Comment';
import { CircularProgress, Typography, Grid, Box, Paper } from '@material-ui/core';
import HOST from '../config';
import { connect } from 'react-redux';
import { addComments } from '../actions';
import CommentForm from './CommentForm';

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
                comment => (
                    <Grid item xs={12} sm={12} key={key++}>
                        <Comment data={comment} />
                    </Grid>
                )
            );
        }

        return (
            <Box p={2}>
                <Paper>
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Comments
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <CommentForm />
                        </Grid>
                        <Grid item xs={12}>
                            <Box p={2}>
                                <Grid container spacing={1}>
                                    {display}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        )
    }
}
const Comments = connect(mapStateToProps)(connectedComments);
export default Comments;
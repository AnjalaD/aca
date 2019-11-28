import React, { Component } from 'react';
import FileLink from './FileLink';
import { Typography, CircularProgress, Box, Paper, Grid } from '@material-ui/core';
import HOST from '../config';
import { connect } from 'react-redux';
import { addLinks } from '../actions';

const mapStateToProps = ({ file }) => ({
    selected: file.selected,
    links: file.links
});

class connectedFileLinks extends Component {
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

        // console.log('filelinks on mount', this.props.selected);
        fetch(HOST + '/documents/linked', options)
            .then(res => res.json())
            .then(res => { this.props.dispatch(addLinks(res.data)) })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        if (this.props.links === null) {
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
        const noLinks = <Typography>No Links Found</Typography>

        const links = this.props.links;
        let display = loading;
        let key = 0;

        if (links === null) {
            display = loading;
        } else if (links.length === 0) {
            display = noLinks;
        } else if (links.length > 0) {
            display = links.map(
                link => <FileLink data={link} key={key++} />
            );
        }

        return (
            <Box p={2}>
                <Paper>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Linked Documents
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {display}
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

        )
    }
}

const FileLinks = connect(mapStateToProps)(connectedFileLinks);
export default FileLinks;
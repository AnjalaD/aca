import React, { Component } from 'react';
import FileLink from './FileLink';
import { Typography, CircularProgress } from '@material-ui/core';
import HOST from '../config';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    selected: state.file.selected
});

class connectedFileLinks extends Component {
    constructor() {
        super();
        this.state = {
            links: null
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

        // console.log('filelinks on mount', this.props.selected);
        fetch(HOST + '/documents/linked', options)
            .then(res => res.json())
            .then(res => { this.setState({ links: res.data }) })
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

        const noLinks = <Typography>No Links Found</Typography>
        let display = loading;
        let key = 0;

        if (this.state.links !== null && this.state.links.length === 0) {
            display = noLinks;
        } else if (this.state.links !== null && this.state.links.length > 0) {
            display = this.state.links.map(
                link => <FileLink data={link} key={key++} />
            );
        }

        return (
            <div>
                {display}
            </div>
        )
    }
}

const FileLinks = connect(mapStateToProps)(connectedFileLinks);
export default FileLinks;
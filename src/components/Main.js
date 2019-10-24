import React, { Component } from 'react';
import FolderViewGrid from './FolderViewGrid';
import { connect } from 'react-redux';
import { onFirstLoad } from '../actions';
import { Container, CircularProgress, Box } from '@material-ui/core';
import Header from './Header';
import FileView from './FileView';
import HOST from '../config';

const mapStateToProps = state => ({
    searchFile: state.searchFile
});

class connectedMain extends Component {
    constructor(props) {
        super(props);
        console.log('main props', props);
        this.state = {
            loading: true
        };
        this.URL = HOST;
    }

    componentDidMount() {
        console.log('folder tree is loading..');
        const options = { method: 'GET' };
        fetch(this.URL, options)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.props.dispatch(onFirstLoad(res.data));
                this.setState({ loading: false });
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate() {
        if (this.props.searchFile !== -1) {
            console.log('update on search');
            const searchString = {
                search_string: this.props.searchFile
            }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(searchString)
            }
            fetch(this.URL + '/documents/search', options)
                .then(res => res.json())
                .then(res => {
                    console.log('search_results', res.data);
                    this.props.dispatch(onFirstLoad(res.data));
                })
                .catch(err => console.log(err));
        }
    }

    render() {
        const content = (
            <Box height="100%">
                <Container>
                    <Header />
                    <FolderViewGrid />
                    <FileView />
                </Container>
            </Box>
        );

        const loading = (
            <div>
                <CircularProgress />
                <p>Loading...</p>
            </div>
        )

        if (this.state.loading) {
            return loading;
        } else {
            return content;
        }
    }
}
const Main = connect(mapStateToProps)(connectedMain);
export default Main;
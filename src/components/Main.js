import React, { Component } from 'react';
import FolderList from './FolderList';
import SearchBar from './SearchBar';
import { Container, CircularProgress } from '@material-ui/core';
import FileList from './FileList';
import SideBar from './SideBar';
import Home from './Home';
import { connect } from 'react-redux';
import { onFirstLoad } from '../actions';

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
        this.URL = 'https://strange-elephant-82.localtunnel.me';
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
            <Container>
                <div>
                    <Home />
                    <SearchBar />
                </div>
                <div>
                    <FolderList />
                    <FileList />
                    <SideBar />
                </div>
            </Container>
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
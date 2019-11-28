import React, { Component } from 'react';
import { Tabs, Tab, Card, Box, Typography, IconButton, Paper } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { selectFile, removeFile } from '../actions';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Card p={3} height={400} component="iframe" src="https://www.google.lk"></Card>
        </Box>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const mapStateToProps = state => ({
    files: state.file.files,
    selected: state.file.selected
})


class connectedTabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.selected
        }
        this.handleChange = this.handleChange.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
    }


    handleChange(file) {
        this.props.dispatch(selectFile(file));
    }

    deleteFile(file, e) {
        e.stopPropagation();
        this.props.dispatch(removeFile(file));
    }

    render() {

        let key = 0;
        const value = this.props.selected;
        const tabPanels = this.props.files.map(file => (
            <TabPanel value={value} index={file.id} key={key++}>
                {file.document_url}
            </TabPanel>
        ));

        const tabs = this.props.files.map(file => (
            <Tab

                component="div"
                label={
                    <Typography>
                        {file.document_name}
                        <IconButton
                            onClick={e => this.deleteFile(file, e)}
                        >
                            <Close />
                        </IconButton>
                    </Typography>
                }
                value={file.id} key={key++}
                onClick={e => this.handleChange(file)}
                wrapped={true}
                {...a11yProps(value)}
            />
        ));

        return (
            <Box p={2}>
                <Paper>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {tabs}
                    </Tabs>
                    {tabPanels}
                </Paper>
            </Box>
        )
    }

}

const TabView = connect(mapStateToProps)(connectedTabView);
export default TabView;

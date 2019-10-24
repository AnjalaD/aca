import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectModule } from '../actions';
import FolderIcon from '@material-ui/icons/Folder';

const connectedFolder = ({ data, dispatch }) => {
    const { module_code, module_name, module_id } = data;

    return (
        <ListItem
            button
            onClick={e => dispatch(selectModule(module_id))}
        >
            <ListItemIcon>
                <FolderIcon />
            </ListItemIcon>
            <ListItemText
                primary={module_code}
                secondary={module_name}
            />
        </ListItem >
    )
}

const Folder = connect()(connectedFolder);
export default Folder;
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectModule } from '../actions';
import FolderIcon from '@material-ui/icons/Folder';

const mapStateToProps = ({ tree }) => ({
    selected: tree.selectedModule
})
const connectedFolder = ({ data, selected, dispatch }) => {
    // console.log('selected', selected);
    const { module_code, module_name, module_id } = data;

    return (
        <ListItem
            divider
            button
            selected={selected === module_id ? true : false}
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

const Folder = connect(mapStateToProps)(connectedFolder);
export default Folder;
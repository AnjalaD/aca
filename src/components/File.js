import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

const File = (props) => {
    console.log(props)
    const { document_name, description } = props.data;
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar>
                    <DescriptionIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={document_name} secondary={description} />
        </ListItem>
    )
}

export default File;

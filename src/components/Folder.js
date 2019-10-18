import React from 'react';
import { Button, Badge } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectModule } from '../actions';

const connectedFolder = ({ data, dispatch }) => {
    const { module_code } = data;

    return (
        <Badge badgeContent={4} invisible={true} color="primary">
            <Button
                onClick={e => dispatch(selectModule(data.module_id))}
                children={
                    <p>{module_code}</p>
                }
            >
            </Button>
        </Badge>
    )
}

const Folder = connect()(connectedFolder);
export default Folder;
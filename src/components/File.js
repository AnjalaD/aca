import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardContent, Avatar, IconButton, Typography, Divider, Link, CardActions, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { selectFile } from '../actions';

const connectFile = ({ data, dispatch }) => {
    console.log(data)
    const { document_name, description, date_created } = data;
    return (
        <Card >
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        E
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <DeleteIcon />
                    </IconButton>
                }
                title={document_name}
                subheader={date_created.substring(0, 10)}
            />

            <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    {description}
                </Typography>
                <Divider></Divider>
                <Typography>
                    <Link href="#">
                        Link
                    </Link>
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={e => dispatch(selectFile(data))}
                >
                    Open
                </Button>
            </CardActions>
        </Card>
    )
}

const File = connect()(connectFile);
export default File;



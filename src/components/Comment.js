import React from 'react';
import { Avatar, Grid, Box, Paper } from '@material-ui/core';

const Comment = ({ data }) => {
    const { author_name, description } = data;
    return (
        <Paper>
            <Box p={1}>
                <Grid container direction="row">
                    <Grid item xs={2} sm={1}>
                        <Grid container justify="center" alignItems="flex-start" direction="column">
                            <Grid item>
                                <Avatar>
                                    {author_name[0]}
                                </Avatar>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} sm={11}>
                        <Grid container direction="column" justify="flex-start">
                            <Grid item>
                                <b>{author_name}</b>
                            </Grid>
                            <Grid item>
                                {description}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
};

export default Comment;
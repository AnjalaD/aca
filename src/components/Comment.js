import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const Comment = ({ data }) => {
    const { author_name, description } = data;
    return (<Paper>
        <Typography>
            {author_name}
        </Typography>
        {description}
    </Paper>
    )
};

export default Comment;
import * as React from 'react';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { IconArrowBigRight } from '@tabler/icons';
import { stringAvatar } from '../../utils/string-utils';
import { useTheme } from '@emotion/react';

const ListRow = ({ data }) => {
    const theme = useTheme();

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete">
                    <IconArrowBigRight />
                </IconButton>
            }
            sx={{
                border: '1px solid',
                borderColor: theme.palette.grey[500] + 30
            }}
        >
            <ListItemAvatar>
                <Avatar {...stringAvatar('Kent Dodds')} />
            </ListItemAvatar>
            <ListItemText primary="Investment Team" secondary="4 employees" />
        </ListItem>
    );
};

export default ListRow;

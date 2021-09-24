import * as React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { stringAvatar } from '../../utils/string-utils';
import { useTheme } from '@emotion/react';

const ListRow = ({ primaryText, secondaryText, secondaryAction }) => {
    const theme = useTheme();

    return (
        <ListItem
            secondaryAction={secondaryAction}
            sx={{
                border: '1px solid',
                borderColor: theme.palette.grey[500] + 30
            }}
        >
            <ListItemAvatar>
                <Avatar {...stringAvatar('Kent Dodds')} />
            </ListItemAvatar>
            <ListItemText primary={primaryText ? primaryText : null} secondary={secondaryText ? secondaryText : null} />
        </ListItem>
    );
};

export default ListRow;

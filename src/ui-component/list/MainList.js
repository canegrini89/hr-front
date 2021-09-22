import * as React from 'react';
import { List } from '@material-ui/core';
import ListRow from './ListRow';

const MainList = () => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListRow />
        </List>
    );
};

export default MainList;

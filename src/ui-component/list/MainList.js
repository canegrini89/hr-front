import * as React from 'react';
import { List } from '@material-ui/core';

const MainList = ({ children }) => {
    return <List sx={{ width: '100%' }}>{children}</List>;
};

export default MainList;

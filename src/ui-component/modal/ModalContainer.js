import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4
};

export const ModalContainer = ({ title, children }) => {
    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h2" component="h2">
                {title}
            </Typography>
            {children}
        </Box>
    );
};

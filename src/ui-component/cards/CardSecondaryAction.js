import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { ButtonBase, Tooltip } from '@material-ui/core';

// project imports
import Avatar from './../extended/Avatar';
import { Box } from '@material-ui/system';

//-----------------------|| CARD SECONDARY ACTION ||-----------------------//

const CardSecondaryAction = ({ icons }) => {
    const renderIcons =
        icons &&
        icons.map((icon, index) => (
            <Tooltip key={index} title={icon.title} placement="left">
                <ButtonBase disableRipple onClick={icon.onClick} sx={{ ml: 2 }}>
                    <Avatar size="badge" color="primary" outline>
                        {icon.component}
                    </Avatar>
                </ButtonBase>
            </Tooltip>
        ));

    return <Box>{renderIcons}</Box>;
};

CardSecondaryAction.propTypes = {
    icons: PropTypes.array
};

export default CardSecondaryAction;

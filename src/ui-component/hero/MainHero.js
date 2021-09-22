import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

// style constant
const useStyles = makeStyles((theme) => ({
    mainHero: {
        maxWidth: 250
    },
    title: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontSize: '1.4rem'
    },
    description: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontSize: '1rem'
    }
}));

//-----------------------|| Loader ||-----------------------//

const MainHero = ({ icon, title, description }) => {
    const classes = useStyles();

    return (
        <div className={classes.mainHero}>
            {icon && icon}

            {title && (
                <Typography className={classes.title} variant="h3">
                    {title}
                </Typography>
            )}
            {title && (
                <Typography className={classes.description} variant="caption">
                    {description}
                </Typography>
            )}
            <Typography variant="h3">.....</Typography>
        </div>
    );
};

MainHero.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string
};

export default MainHero;

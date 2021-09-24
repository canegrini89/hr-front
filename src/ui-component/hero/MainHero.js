import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

// style constant
const useStyles = makeStyles((theme) => ({
    mainHero: {
        maxWidth: 350
    },
    title: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontSize: '1.4rem'
    },
    description: {
        marginBottom: '1rem',
        fontSize: '1rem'
    },
    centered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}));

//-----------------------|| Loader ||-----------------------//

const MainHero = ({ icon, title, description, centered }) => {
    const classes = useStyles();

    return (
        <div className={clsx(classes.mainHero, centered ? classes.centered : null)}>
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
    description: PropTypes.string,
    centered: PropTypes.bool
};

export default MainHero;

import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core';
import MainTabs from '../tabs/MainTabs';

// constant
// const headerSX = {
//     '& .MuiCardHeader-action': { mr: 0 }
// };

//-----------------------|| CUSTOM MAIN CARD ||-----------------------//

const MainCard = React.forwardRef(
    (
        {
            border = true,
            boxShadow,
            children,
            content = true,
            contentClass,
            contentSX,
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            tabs,
            ...others
        },
        ref
    ) => {
        const theme = useTheme();

        return (
            <Card
                ref={ref}
                {...others}
                sx={{
                    border: border ? '1px solid' : 'none',
                    borderColor: theme.palette.primary[200] + 75,
                    ':hover': {
                        boxShadow: boxShadow ? (shadow ? shadow : '0 2px 14px 0 rgb(32 40 45 / 8%)') : 'inherit'
                    },
                    ...sx
                }}
            >
                {/* card header and action */}
                {!tabs && !darkTitle && title && <CardHeader title={title} action={secondary} />}
                {!tabs && darkTitle && title && <CardHeader title={<Typography variant="h3">{title}</Typography>} action={secondary} />}

                {/* render tabs */}
                {tabs && <MainTabs tabs={tabs} />}

                {/* content & header divider */}
                {(title || tabs) && <Divider />}

                {/* card content */}
                {content && (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </Card>
        );
    }
);

MainCard.propTypes = {
    border: PropTypes.bool,
    boxShadow: PropTypes.bool,
    children: PropTypes.node,
    content: PropTypes.bool,
    contentClass: PropTypes.string,
    contentSX: PropTypes.object,
    darkTitle: PropTypes.bool,
    secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    shadow: PropTypes.string,
    sx: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
    tabs: PropTypes.arrayOf(PropTypes.string)
};

export default MainCard;

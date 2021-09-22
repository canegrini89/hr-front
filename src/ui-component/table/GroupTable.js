import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import MainHero from '../hero/MainHero';
import { IconUsers } from '@tabler/icons';
import MainList from '../list/MainList';

// style constant
const useStyles = makeStyles((theme) => ({
    groupTableContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

//-----------------------|| Loader ||-----------------------//

const GroupTable = () => {
    const classes = useStyles();

    return (
        <div className={classes.groupTableContainer}>
            <MainHero
                centered={true}
                icon={<IconUsers size="3rem" />}
                title="Teams"
                description="These are all teams created in your company"
            />
            <MainList />
        </div>
    );
};

export default GroupTable;

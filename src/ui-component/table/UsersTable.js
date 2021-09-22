import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import MainHero from '../hero/MainHero';
import { IconUsers } from '@tabler/icons';
import { Card, CardContent, Grid } from '@material-ui/core';
import { gridSpacing } from '../../store/constant';

// style constant
const useStyles = makeStyles((theme) => ({
    usersTableContainer: {}
}));

//-----------------------|| Loader ||-----------------------//

const UsersTable = () => {
    const classes = useStyles();

    return (
        <div className={classes.usersTableContainer}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <MainHero
                        icon={<IconUsers size="3rem" />}
                        title="Employees"
                        description="List of all employees at your company. You can alse view terminated employees."
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent> 50 Employees</CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default UsersTable;

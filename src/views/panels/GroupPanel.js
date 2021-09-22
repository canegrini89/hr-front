import React from 'react';

// material-ui
import { Card, Grid } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';

import SecondaryAction from './../../ui-component/cards/CardSecondaryAction';
import { gridSpacing } from '../../store/constant';
import MainHero from '../../ui-component/hero/MainHero';
import { IconUsers } from '@tabler/icons';
import MainList from '../../ui-component/list/MainList';

//============================|| MATERIAL ICONS ||============================//

const GroupPanel = () => {
    return (
        <MainCard title="Marketing" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Card sx={{ mb: 3 }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <MainHero
                            icon={<IconUsers size="3rem" />}
                            title="Team Leaders"
                            description="Team leaders can see their members' information."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MainHero
                            icon={<IconUsers size="3rem" />}
                            centered
                            title="Team Members"
                            description="Employees that belong to the Marketing team and are managed by the team's leader."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MainList />
                    </Grid>
                </Grid>
            </Card>
        </MainCard>
    );
};

export default GroupPanel;

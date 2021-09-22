import React from 'react';

// material-ui
import { Card } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import UsersTable from '../../ui-component/table/UsersTable';
import GroupTable from '../../ui-component/table/GroupTable';
import { Route, Switch } from 'react-router';

//============================|| MATERIAL ICONS ||============================//

const EmployeesPanel = () => {
    return (
        <MainCard tabs={['employees', 'teams', 'org chart']}>
            <Card sx={{ mb: 3 }}>
                <Switch>
                    <Route exact path="/employees/list" component={UsersTable} />
                    <Route path="/employees/teams" component={GroupTable} />
                </Switch>
            </Card>
        </MainCard>
    );
};

export default EmployeesPanel;

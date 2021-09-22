import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import TabPanel from '../../ui-component/tabs/TabPanel';
import { useSelector } from 'react-redux';
import UsersTable from '../../ui-component/table/UsersTable';
import GroupTable from '../../ui-component/table/GroupTable';

// style constant
const useStyles = makeStyles((theme) => ({}));

//============================|| MATERIAL ICONS ||============================//

const EmployeesPanel = () => {
    const classes = useStyles();
    const currentTab = useSelector((state) => state.customization.currentTab);
    return (
        <MainCard tabs={['employees', 'teams', 'org chart']}>
            <Card sx={{ mb: 3 }}>
                <TabPanel index={0} value={currentTab}>
                    <UsersTable />
                </TabPanel>
                <TabPanel index={1} value={currentTab}>
                    <GroupTable />
                </TabPanel>
                <TabPanel index={2} value={currentTab}>
                    index 3
                </TabPanel>
            </Card>
        </MainCard>
    );
};

export default EmployeesPanel;

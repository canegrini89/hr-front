import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { useHistory } from 'react-router';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

function MainTabs({ tabs }) {
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const setUrl = (e) => {
        if (e.currentTarget.id.includes('employees')) {
            return history.push('/employees/list');
        } else if (e.currentTarget.id.includes('teams')) {
            return history.push('/employees/teams');
        } else {
            return history.push('/employees/organizational-chart');
        }
    };

    return (
        <Tabs key={value} value={value} onChange={handleChange} aria-label="main-tab" centered>
            {tabs.map((tab) => (
                <Tab label={tab} {...a11yProps(tab)} key={tab} onClick={(e) => setUrl(e)} />
            ))}
        </Tabs>
    );
}

MainTabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string)
};

export default MainTabs;

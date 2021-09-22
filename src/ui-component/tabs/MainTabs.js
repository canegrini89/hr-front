import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CURRENT_TAB } from '../../store/actions';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

function MainTabs({ tabs }) {
    const dispatch = useDispatch();
    const currentTab = useSelector((state) => state.customization.currentTab);

    const handleChange = (event, newValue) => {
        dispatch({ type: SET_CURRENT_TAB, currentTab: newValue });
    };

    return (
        <Tabs key={currentTab} value={currentTab} onChange={handleChange} aria-label="main-tab" centered>
            {tabs.map((tab) => (
                <Tab label={tab} {...a11yProps(tab)} />
            ))}
        </Tabs>
    );
}

MainTabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string)
};

export default MainTabs;

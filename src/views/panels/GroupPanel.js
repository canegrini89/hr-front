import React from 'react';
import { Avatar, ButtonBase, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core';
import MainCard from '../../ui-component/cards/MainCard';
import SecondaryAction from './../../ui-component/cards/CardSecondaryAction';
import { gridSpacing } from '../../store/constant';
import MainHero from '../../ui-component/hero/MainHero';
import { IconAward, IconUsers, IconPlus, IconSettings, IconArrowNarrowRight, IconDots } from '@tabler/icons';
import MainList from '../../ui-component/list/MainList';
import ListRow from '../../ui-component/list/ListRow';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1rem'
    }
}));

const GroupPanel = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const employees = [
        {
            id: '123',
            name: 'John Doe'
        },
        {
            id: '124',
            name: 'Mark Darwin'
        }
    ];

    const panelIcons = [
        {
            component: <IconPlus />,
            title: 'Add New Group',
            onClick: () => dispatch({ type: OPEN_MODAL, modalType: 'add-user-modal' })
        }
    ];

    const icons = [
        {
            component: <IconSettings />,
            title: 'Settings',
            onClick: () => console.log('Settings')
        },
        {
            component: <IconArrowNarrowRight />,
            title: 'Profile',
            onClick: () => console.log('Profile')
        }
    ];

    return (
        <MainCard title="Marketing Group" secondary={<SecondaryAction icons={panelIcons} />}>
            <Card sx={{ mb: 3 }}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={6} className={classes.boxContainer}>
                        <MainHero
                            icon={<IconAward size="3rem" />}
                            title="Team Leaders"
                            description="Team leaders can see their members' information."
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.boxContainer}>
                        <Card elevation={2} style={{ minWidth: 300 }}>
                            <CardHeader
                                avatar={<Avatar />}
                                action={
                                    <ButtonBase disableRipple>
                                        <Avatar size="badge">
                                            <IconDots />
                                        </Avatar>
                                    </ButtonBase>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Typography style={{ textAlign: 'center' }} variant="h3">
                                    John Doe
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} className={classes.boxContainer}>
                        <MainHero
                            icon={<IconUsers size="3rem" />}
                            centered
                            title="Team Members"
                            description="Employees that belong to the Marketing team and are managed by the team's leader."
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <MainList>
                            {employees.map((employee) => (
                                <ListRow
                                    key={employee.id}
                                    primaryText={employee.name}
                                    secondaryAction={<SecondaryAction icons={icons} />}
                                />
                            ))}
                        </MainList>
                    </Grid>
                </Grid>
            </Card>
        </MainCard>
    );
};

export default GroupPanel;

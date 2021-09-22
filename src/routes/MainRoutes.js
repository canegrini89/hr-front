import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/panels/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/panels/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/panels/Shadow')));
const EmployeesPanel = Loadable(lazy(() => import('../views/panels/EmployeesPanel')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard',
                '/profile',
                '/time-off',
                '/clock-in',
                '/documents',

                '/employees',
                '/calendar',
                '/files',
                '/benefits',
                '/reports'
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <AuthGuard>
                        <Route path="/dashboard" component={DashboardDefault} />
                        <Route path="/profile" component={UtilsTypography} />
                        <Route path="/time-off" component={UtilsColor} />
                        <Route path="/clock-in" component={UtilsShadow} />
                        <Route path="/documents" component={UtilsShadow} />

                        <Route path="/employees" component={EmployeesPanel} />
                        <Route path="/calendar" component={SamplePage} />
                        <Route path="/files" component={SamplePage} />
                        <Route path="/benefits" component={SamplePage} />
                        <Route path="/reports" component={SamplePage} />
                    </AuthGuard>
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;

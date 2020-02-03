import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {Route, Redirect, withRouter} from "react-router-dom";
import {GUEST, SEEKER, COMFORTER, ADMIN} from "./userRoles";
import {paths} from "../routes";

const RouteWithSubRoutes = ({location,allowed, exact, path, routes, Component}) => {
    const {role, emailActivated, subscriptionPlan, blocked} = useContext(UserContext);

    if (role !== GUEST && !emailActivated && !location.pathname.includes('verification')) {
        return (
            <Redirect to={paths.verification}/>
        )
    }
    if (role !== GUEST && emailActivated && !subscriptionPlan && !location.pathname.includes('select-plan-page')) {
        return (
            <Redirect to={paths.planSelectPage}/>
        )
    }
    if (role !== GUEST && blocked && location.pathname !== paths.profile) {
        console.log(location.pathname === '/messenger');
        return (
            <Redirect to={paths.profile}/>
            )
    }

    if (!allowed.includes(role)) {
        switch (role) {
            case GUEST:
                return <Redirect to={paths.login}/>;
            case SEEKER:
                return <Redirect to={paths.search}/>;
            case COMFORTER:
                return <Redirect to={paths.profile}/>;
            case ADMIN:
                return <Redirect to={paths.adminDashboard}/>;
            default:
                return <Redirect to={paths.login}/>;
        }
    }
    
    return <Route exact={exact} path={path} render={props => <Component {...props} routes={routes}/>}/>;

};

export default withRouter(RouteWithSubRoutes);

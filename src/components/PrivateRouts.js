import React from 'react';
import { Route,  Navigate   } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    console.log(Component, rest, " --> props")
    return (

        <Route {...rest} render={props => (
            localStorage.getItem("tokenData") ?
                <Component {...props} />
            : <Navigate  to="/dashboard" />
        )} />

    );
};

export default PrivateRoute;
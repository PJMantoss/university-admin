import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }){
    return(
        <Route 
            {...restProps} 
            render={() => { //if no user read regular component
                if(!user){
                    return children;
                }

                if(user){ //if there's user redirect to the admin page
                    return(
                        <Redirect to={{ pathname: loggedInPath }} />
                    );
                }
                return null;
            }} 
        />
    )
}

export function ProtectedRoute({ user, children, ...restProps }){
    return(
        <Route 
            {...restProps} 
            render={({ location }) => {
                if(user){
                    return children
                }

                if(!user){
                    return(
                        <Redirect 
                            to={{
                                pathname: 'signin',
                                state: {from: location}
                            }} 
                        />
                    );
                }
                return null;
            }} 
        />
    )
}
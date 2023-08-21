import React, { useEffect } from 'react';

const AuthGuard = ({component}) => {
    useEffect(() => {
        console.log("Auth Guard");
    }, []);

    return <>{component}</>
}

export default AuthGuard;
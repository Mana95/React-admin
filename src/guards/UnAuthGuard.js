import React, { useEffect } from 'react';

const UnAuthGuard = ({component}) => {
    useEffect(() => {
        console.log("UnAuth Guard");
    }, [component]);

    return <>{component}</>
}

export default UnAuthGuard;
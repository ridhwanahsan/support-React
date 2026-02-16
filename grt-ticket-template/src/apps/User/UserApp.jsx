
import React, { useState } from 'react';
import { GuestView } from './components/GuestView';
import { UserDashboard } from './components/UserDashboard'; // To be implemented

export const UserApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {!isLoggedIn ? (
                <GuestView onLogin={() => setIsLoggedIn(true)} />
            ) : (
                <UserDashboard onLogout={() => setIsLoggedIn(false)} />
            )}
        </>
    );
};

export default UserApp;

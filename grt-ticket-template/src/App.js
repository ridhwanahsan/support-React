
import React, { useState } from 'react';
import AdminApp from './apps/Admin/AdminApp';
import UserApp from './apps/User/UserApp';
import './styles/Globals.css';

const App = () => {
    const [currentApp, setCurrentApp] = useState('home');

    if (currentApp === 'admin') {
        return (
            <div>
                <div className="demo-nav">
                    <span>Admin App Demo</span>
                    <button onClick={() => setCurrentApp('home')}>Back to Home</button>
                </div>
                <AdminApp />
            </div>
        );
    }

    if (currentApp === 'user') {
        return (
            <div>
                <div className="demo-nav">
                    <span>User App Demo</span>
                    <button onClick={() => setCurrentApp('home')}>Back to Home</button>
                </div>
                <UserApp />
            </div>
        );
    }

    return (
        <div className="landing">
            <div className="landing-card">
                <h1>GRT Ticket System Template</h1>
                <p>Select an application to preview:</p>
                <div className="button-group">
                    <button className="btn-demo admin" onClick={() => setCurrentApp('admin')}>
                        Admin Dashboard
                    </button>
                    <button className="btn-demo user" onClick={() => setCurrentApp('user')}>
                        User Frontend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;


import React, { useState } from 'react';
import { AdminLayout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { TicketList } from './components/TicketList';
import { Settings } from './components/Settings';

export const AdminApp = () => {
    const [activePage, setActivePage] = useState('dashboard');

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard': return <Dashboard />;
            case 'tickets': return <TicketList />;
            case 'settings': return <Settings />;
            default: return <Dashboard />;
        }
    };

    return (
        <AdminLayout activePage={activePage} onNavigate={setActivePage}>
            {renderContent()}
        </AdminLayout>
    );
};

// Default export as well in case needed
export default AdminApp;

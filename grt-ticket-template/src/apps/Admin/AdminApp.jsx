
import React, { useState } from 'react';
import { AdminLayout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { TicketList } from './components/TicketList';
import { Settings } from './components/Settings';
import { FormBuilder } from './components/FormBuilder';
// Using User ChatInterface for demo purposes in Admin 'Support Chat'
import { ChatInterface } from '../User/components/ChatInterface';
import { tickets } from '../../data/mock'; // Import mock tickets for chat demo

export const AdminApp = () => {
    const [activePage, setActivePage] = useState('dashboard');

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard': return <Dashboard />;
            case 'tickets': return <TicketList />;
            case 'form-builder': return <FormBuilder />;
            case 'support-chat': return <ChatInterface ticket={tickets[0]} />; // Demo with first ticket
            case 'settings': return <Settings />;
            case 'notifications': return <Settings initialTab="notifications" />;
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

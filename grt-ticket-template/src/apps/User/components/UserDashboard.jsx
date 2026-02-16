
import React, { useState } from 'react';
import { TicketSidebar } from './TicketSidebar';
import { ChatInterface } from './ChatInterface';
import { tickets as mockTickets } from '../../../data/mock';
import styles from '../styles/UserDashboard.module.css';

export const UserDashboard = ({ onLogout }) => {
    const [selectedTicketId, setSelectedTicketId] = useState(mockTickets[0]?.id);

    const selectedTicket = mockTickets.find(t => t.id === selectedTicketId) || mockTickets[0];

    return (
        <div className={styles.container}>
            <div className={styles.sidebarWrapper}>
                <TicketSidebar
                    tickets={mockTickets}
                    selectedId={selectedTicketId}
                    onSelect={setSelectedTicketId}
                    onLogout={onLogout}
                />
            </div>
            <div className={styles.mainContent}>
                {selectedTicket ? (
                    <ChatInterface ticket={selectedTicket} />
                ) : (
                    <div className={styles.emptyState}>Select a ticket to view details</div>
                )}
            </div>
        </div>
    );
};

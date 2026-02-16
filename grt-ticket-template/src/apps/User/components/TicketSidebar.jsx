
import React, { useState } from 'react';
import { FiLogOut, FiPlus, FiUser, FiCamera, FiBell } from 'react-icons/fi';
import { Badge } from '../../../components/common/Badge';
import { Button } from '../../../components/common/Button';
import { Input } from '../../../components/common/Input';
import styles from '../styles/TicketSidebar.module.css';

export const TicketSidebar = ({ tickets, selectedId, onSelect, onLogout }) => {
    const [activeTab, setActiveTab] = useState('tickets'); // 'tickets' or 'profile'

    return (
        <div className={styles.sidebar}>
            {/* Sidebar Tabs */}
            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'tickets' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('tickets')}
                >
                    My Tickets
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'profile' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('profile')}
                >
                    My Profile
                </button>
            </div>

            {activeTab === 'tickets' && (
                <>
                    <div className={styles.actions}>
                        <Button variant="primary" size="sm" style={{ width: '100%' }}>
                            <FiPlus style={{ marginRight: 5 }} /> New Ticket
                        </Button>
                    </div>
                    <div className={styles.ticketList}>
                        {tickets.map(ticket => (
                            <div
                                key={ticket.id}
                                className={`${styles.ticketItem} ${selectedId === ticket.id ? styles.activeItem : ''}`}
                                onClick={() => onSelect(ticket.id)}
                            >
                                <div className={styles.ticketHeader}>
                                    <span className={styles.ticketId}>{ticket.id}</span>
                                    <span className={styles.ticketDate}>{ticket.created}</span>
                                </div>
                                <h4 className={styles.ticketSubject}>{ticket.subject}</h4>
                                <div className={styles.ticketFooter}>
                                    <Badge status={ticket.status} />
                                    <span className={styles.category}>{ticket.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {activeTab === 'profile' && (
                <div className={styles.profileSection}>
                    <div className={styles.avatarLargeWrapper}>
                        <img src="https://i.pravatar.cc/150?u=3" className={styles.avatarLarge} alt="Profile" />
                        <div className={styles.cameraOverlay}>
                            <FiCamera />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <Input label="Full Name" defaultValue="Jane Doe" />
                        <Input label="Email Address" defaultValue="jane@client.com" />

                        <div className={styles.toggleRow}>
                            <span className={styles.toggleLabel}>
                                <FiBell style={{ marginRight: 8 }} /> Email Notifications
                            </span>
                            <input type="checkbox" defaultChecked />
                        </div>

                        <Button variant="primary" style={{ width: '100%', marginTop: 20 }}>
                            Update Profile
                        </Button>

                        <div className={styles.divider} />

                        <Button variant="secondary" onClick={onLogout} style={{ width: '100%', borderColor: '#d63638', color: '#d63638' }}>
                            <FiLogOut style={{ marginRight: 5 }} /> Logout
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

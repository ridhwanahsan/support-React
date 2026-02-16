
import React, { useState } from 'react';
import { Button } from '../../../components/common/Button';
import { Input, Select, Textarea } from '../../../components/common/Input';
import { Card } from '../../../components/common/Card';
import styles from '../styles/GuestView.module.css';

export const GuestView = ({ onLogin }) => {
    const [activeTab, setActiveTab] = useState('new-ticket');

    const handleSubmitTicket = (e) => {
        e.preventDefault();
        alert("Ticket Submitted! (Mock)");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className={styles.container}>
            <Card className={styles.authCard}>
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'new-ticket' ? styles.active : ''}`}
                        onClick={() => setActiveTab('new-ticket')}
                    >
                        Submit Ticket
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'login' ? styles.active : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Check Status / Login
                    </button>
                </div>

                <div className={styles.content}>
                    {activeTab === 'new-ticket' ? (
                        <form onSubmit={handleSubmitTicket}>
                            <div className={styles.row}>
                                <Input label="Your Name" placeholder="John Doe" required />
                                <Input label="Email Address" type="email" placeholder="john@example.com" required />
                            </div>
                            <div className={styles.row}>
                                <Select label="Category" options={[
                                    { value: 'tech', label: 'Technical Issue' },
                                    { value: 'sales', label: 'Sales Question' },
                                    { value: 'billing', label: 'Billing' },
                                ]} />
                                <Select label="Priority" options={[
                                    { value: 'low', label: 'Low' },
                                    { value: 'medium', label: 'Medium' },
                                    { value: 'high', label: 'High' },
                                ]} />
                            </div>
                            <Input label="Subject" placeholder="Brief summary of the issue" required />
                            <Textarea label="Message" placeholder="Describe your issue in detail..." required />

                            <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '10px' }}>
                                Submit Ticket
                            </Button>
                        </form>
                    ) : (
                        <form onSubmit={handleLogin}>
                            <Input label="Email Address" type="email" required />
                            <Input label="Ticket ID (Optional)" placeholder="#1234" />
                            <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '10px' }}>
                                Access Tickets
                            </Button>
                            <p className={styles.loginNote}>
                                Enter your email to receive a magic link, or login with your password.
                            </p>
                        </form>
                    )}
                </div>
            </Card>
        </div>
    );
};


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
        // In real app: create ticket -> maybe auto-login -> redirect
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
                        Submit a Ticket
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'login' ? styles.active : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                </div>

                <div className={styles.content}>
                    {/* 1. Submit Ticket Tab */}
                    {activeTab === 'new-ticket' ? (
                        <form onSubmit={handleSubmitTicket}>
                            <div className={styles.row}>
                                <Input label="Your Name" placeholder="John Doe" required />
                                <Input label="Email Address" type="email" placeholder="john@example.com" required />
                            </div>
                            <div className={styles.row}>
                                <Select label="Category" options={[
                                    { value: 'tech', label: '🔧 Technical Issue' },
                                    { value: 'sales', label: '💰 Sales Question' },
                                    { value: 'billing', label: '💳 Billing' },
                                ]} />
                                <Select label="Priority" options={[
                                    { value: 'low', label: 'Low' },
                                    { value: 'medium', label: 'Medium' },
                                    { value: 'high', label: 'High' },
                                ]} />
                            </div>
                            <Input label="Subject" placeholder="Brief summary of the issue" required />
                            <Textarea label="Message" placeholder="Describe your issue in detail..." required />

                            <div className={styles.divider}>
                                <span>Account Creation (Optional)</span>
                            </div>
                            <Input
                                label="Password (for future login)"
                                type="password"
                                placeholder="Leave empty to auto-generate"
                            />

                            <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '10px' }}>
                                Submit Ticket
                            </Button>
                        </form>
                    ) : (
                        /* 2. Login Tab */
                        <form onSubmit={handleLogin}>
                            <Input label="Username or Email" required />
                            <Input label="Password" type="password" required />

                            <div className={styles.formFooter}>
                                <label className={styles.rememberMe}>
                                    <input type="checkbox" /> Remember Me
                                </label>
                                <a href="#" className={styles.forgotPass}>Forgot Password?</a>
                            </div>

                            <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '20px' }}>
                                Login to Dashboard
                            </Button>
                        </form>
                    )}
                </div>
            </Card>
        </div>
    );
};

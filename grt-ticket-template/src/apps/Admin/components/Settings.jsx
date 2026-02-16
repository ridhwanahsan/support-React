
import React, { useState } from 'react';
import { Card } from '../../../components/common/Card';
import { Button } from '../../../components/common/Button';
import { Input, Textarea } from '../../../components/common/Input';
import styles from '../styles/Settings.module.css';

const SettingsTab = ({ active, label, onClick }) => (
    <button
        className={`${styles.tab} ${active ? styles.activeTab : ''}`}
        onClick={onClick}
    >
        {label}
    </button>
);

export const Settings = () => {
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className={styles.container}>
            <Card>
                <div className={styles.tabsHeader}>
                    <SettingsTab
                        label="General"
                        active={activeTab === 'general'}
                        onClick={() => setActiveTab('general')}
                    />
                    <SettingsTab
                        label="Email Piping"
                        active={activeTab === 'email'}
                        onClick={() => setActiveTab('email')}
                    />
                    <SettingsTab
                        label="Integrations"
                        active={activeTab === 'integrations'}
                        onClick={() => setActiveTab('integrations')}
                    />
                    <SettingsTab
                        label="Realtime"
                        active={activeTab === 'realtime'}
                        onClick={() => setActiveTab('realtime')}
                    />
                </div>

                <div className={styles.tabContent}>
                    {activeTab === 'general' && (
                        <div className={styles.formSection}>
                            <h3>General Settings</h3>
                            <Input label="Admin Name" defaultValue="Support Admin" />
                            <Input label="Support Email" defaultValue="support@company.com" />
                            <Textarea label="Ticket Categories (One per line)" defaultValue="Technical&#10;Billing&#10;Sales&#10;Feature Request" />
                            <div className={styles.actions}>
                                <Button variant="primary">Save Changes</Button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'email' && (
                        <div className={styles.formSection}>
                            <h3>Email Piping / IMAP</h3>
                            <Input label="IMAP Host" placeholder="imap.gmail.com" />
                            <Input label="IMAP Port" placeholder="993" />
                            <Input label="Email User" />
                            <Input label="Email Password" type="password" />
                            <div className={styles.checkboxGroup}>
                                <input type="checkbox" id="piping_enabled" />
                                <label htmlFor="piping_enabled">Enable Email Piping</label>
                            </div>
                            <div className={styles.actions}>
                                <Button variant="primary">Save Mail Settings</Button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'integrations' && (
                        <div className={styles.formSection}>
                            <h3>Third-Party Integrations</h3>
                            <Input label="Twilio SID (WhatsApp)" />
                            <Input label="Twilio Auth Token" type="password" />
                            <Input label="Slack Webhook URL" />
                            <Input label="Discord Webhook URL" />
                            <div className={styles.actions}>
                                <Button variant="primary">Save Integrations</Button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'realtime' && (
                        <div className={styles.formSection}>
                            <h3>Realtime (Supabase)</h3>
                            <p className={styles.hint}>Configure Supabase for realtime chat updates.</p>
                            <Input label="Supabase URL" />
                            <Input label="Supabase Anon Key" type="password" />
                            <div className={styles.actions}>
                                <Button variant="primary">Save Connection</Button>
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

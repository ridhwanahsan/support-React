
import React, { useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi'; // Add imports
import { Card } from '../../../components/common/Card';
import { Button } from '../../../components/common/Button';
import { Input, Textarea, Select } from '../../../components/common/Input';
import styles from '../styles/Settings.module.css';

const SettingsTab = ({ active, label, onClick }) => (
    <button
        className={`${styles.tab} ${active ? styles.activeTab : ''}`}
        onClick={onClick}
    >
        {label}
    </button>
);

const Toggle = ({ label, checked }) => (
    <div className={styles.checkboxGroup}>
        <input type="checkbox" id={label.replace(/\s+/g, '')} defaultChecked={checked} />
        <label htmlFor={label.replace(/\s+/g, '')}>{label}</label>
    </div>
);

export const Settings = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General' },
        { id: 'notifications', label: 'Email Notifications' },
        { id: 'piping', label: 'Email Piping' },
        { id: 'whatsapp', label: 'WhatsApp' },
        { id: 'direct', label: 'Direct Contact' },
        { id: 'realtime', label: 'Realtime Chat' },
        { id: 'webhooks', label: 'Webhooks' },
    ];

    return (
        <div className={styles.container}>
            <Card>
                <div className={styles.tabsHeader}>
                    {tabs.map(tab => (
                        <SettingsTab
                            key={tab.id}
                            label={tab.label}
                            active={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        />
                    ))}
                </div>

                <div className={styles.tabContent}>
                    {/* 1. General Settings */}
                    {activeTab === 'general' && (
                        <div className={styles.formSection}>
                            <h3>General Settings</h3>
                            <div className={styles.row}>
                                <Input label="Admin Name (Support Team Name)" defaultValue="GRT Support Team" />
                                <Input label="Tickets Per Page" type="number" defaultValue="10" />
                            </div>
                            <div className={styles.row}>
                                <Input label="Poll Interval (seconds)" type="number" defaultValue="5" />
                                <Input label="Auto-Close Ticket (Days)" type="number" defaultValue="7" />
                            </div>

                            {/* Auto-Assignment Logic */}
                            <div style={{ marginTop: 20 }}>
                                <label className={styles.label}>Issue Categories & Auto-Assignment</label>
                                <div className={styles.categoryList}>
                                    <div className={styles.categoryRow}>
                                        <Input placeholder="Category Name" defaultValue="Technical" />
                                        <Input placeholder="Icon Class" defaultValue="fi-cpu" />
                                        <Select options={[
                                            { value: '', label: 'Auto-Assign To...' },
                                            { value: 'id_1', label: 'Agent Smith' },
                                            { value: 'id_2', label: 'Agent Jones' },
                                        ]} />
                                        <Button variant="danger" size="sm"><FiTrash2 /></Button>
                                    </div>
                                    <div className={styles.categoryRow}>
                                        <Input placeholder="Category Name" defaultValue="Billing" />
                                        <Input placeholder="Icon Class" defaultValue="fi-credit-card" />
                                        <Select options={[
                                            { value: '', label: 'Auto-Assign To...' },
                                            { value: 'id_1', label: 'Agent Smith' },
                                        ]} />
                                        <Button variant="danger" size="sm"><FiTrash2 /></Button>
                                    </div>
                                    <Button variant="secondary" size="sm" style={{ marginTop: 5 }}>
                                        <FiPlus /> Add Category
                                    </Button>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <Button variant="primary">Save General Settings</Button>
                            </div>
                        </div>
                    )}

                    {/* 2. Email Notifications */}
                    {activeTab === 'notifications' && (
                        <div className={styles.formSection}>
                            <h3>Email Notifications</h3>
                            <Toggle label="Enable Email Notifications" checked />
                            <Input label="Notification Emails (comma separated)" defaultValue="admin@example.com, support@example.com" />
                            <div className={styles.actions}>
                                <Button variant="primary">Save Notification Settings</Button>
                            </div>
                        </div>
                    )}

                    {/* 3. Email Piping */}
                    {activeTab === 'piping' && (
                        <div className={styles.formSection}>
                            <h3>Email Piping (Beta)</h3>
                            <Toggle label="Enable Email Piping" />
                            <div className={styles.row}>
                                <Input label="IMAP Host" placeholder="imap.gmail.com" />
                                <Input label="IMAP Port" placeholder="993" />
                            </div>
                            <div className={styles.row}>
                                <Input label="Email User" />
                                <Input label="Email Password" type="password" />
                            </div>
                            <Toggle label="Use SSL" checked />
                            <div className={styles.actions}>
                                <Button variant="primary">Save Piping Settings</Button>
                            </div>
                        </div>
                    )}

                    {/* 4. WhatsApp Integrations */}
                    {activeTab === 'whatsapp' && (
                        <div className={styles.formSection}>
                            <h3>WhatsApp Integration (Twilio)</h3>
                            <Toggle label="Enable WhatsApp Integration" />
                            <Input label="Twilio SID" />
                            <Input label="Twilio Auth Token" type="password" />
                            <div className={styles.row}>
                                <Input label="Twilio From Number" placeholder="+1234567890" />
                                <Input label="Admin WhatsApp Number" placeholder="+1098765432" />
                            </div>
                            <div className={styles.actions}>
                                <Button variant="primary">Save WhatsApp Settings</Button>
                            </div>
                        </div>
                    )}

                    {/* 5. Direct Contact */}
                    {activeTab === 'direct' && (
                        <div className={styles.formSection}>
                            <h3>Direct Contact Buttons</h3>
                            <Toggle label="Enable Call / SMS Buttons" checked />
                            <Input label="Support Phone Number" placeholder="+123456789" />
                            <Textarea label="SMS Body Text" defaultValue="Hello, I need help with ticket #" />
                            <div className={styles.actions}>
                                <Button variant="primary">Save Contact Settings</Button>
                            </div>
                        </div>
                    )}

                    {/* 6. Realtime Chat */}
                    {activeTab === 'realtime' && (
                        <div className={styles.formSection}>
                            <h3>Realtime Chat (Supabase)</h3>
                            <Toggle label="Enable Supabase Realtime" />
                            <Input label="Supabase Project URL" />
                            <Input label="Supabase Anon Key" type="password" />
                            <Input label="Service Role Secret" type="password" />
                            <div className={styles.actions}>
                                <Button variant="primary">Save Realtime Settings</Button>
                            </div>
                        </div>
                    )}

                    {/* 7. Webhooks */}
                    {activeTab === 'webhooks' && (
                        <div className={styles.formSection}>
                            <h3>Webhooks & Integrations</h3>
                            <Input label="Slack Webhook URL" placeholder="https://hooks.slack.com/..." />
                            <Input label="Discord Webhook URL" placeholder="https://discord.com/api/webhooks/..." />
                            <Input label="Zapier Webhook URL" placeholder="https://hooks.zapier.com/..." />
                            <div className={styles.actions}>
                                <Button variant="primary">Save Webhooks</Button>
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </div>
    );
};

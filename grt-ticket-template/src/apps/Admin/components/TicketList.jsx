
import React, { useState } from 'react';
import { FiSearch, FiEdit, FiTrash2, FiMoreHorizontal } from 'react-icons/fi';
import { Card } from '../../../components/common/Card';
import { Button } from '../../../components/common/Button';
import { Input, Select } from '../../../components/common/Input';
import { Badge } from '../../../components/common/Badge';
import { tickets as initialTickets } from '../../../data/mock';
import styles from '../styles/TicketList.module.css';

export const TicketList = () => {
    const [tickets, setTickets] = useState(initialTickets);
    const [filter, setFilter] = useState({ search: '', status: '', agent: '' });
    const [page, setPage] = useState(1);

    const handleFilterChange = (key, value) => {
        setFilter(prev => ({ ...prev, [key]: value }));
    };

    const filteredTickets = tickets.filter(t => {
        const matchSearch = t.subject.toLowerCase().includes(filter.search.toLowerCase()) ||
            t.id.toLowerCase().includes(filter.search.toLowerCase());
        const matchStatus = filter.status ? t.status === filter.status : true;
        // Mock agent filter logic
        return matchSearch && matchStatus;
    });

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this ticket?')) {
            setTickets(prev => prev.filter(t => t.id !== id));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.actionsBar}>
                <div className={styles.filters}>
                    <div className={styles.searchWrapper}>
                        <Input
                            placeholder="Search tickets..."
                            value={filter.search}
                            onChange={(e) => handleFilterChange('search', e.target.value)}
                        />
                        <FiSearch className={styles.searchIcon} />
                    </div>
                    <Select
                        options={[
                            { value: '', label: 'All Statuses' },
                            { value: 'Open', label: 'Open' },
                            { value: 'Pending', label: 'Pending' },
                            { value: 'Closed', label: 'Closed' }
                        ]}
                        value={filter.status}
                        onChange={(e) => handleFilterChange('status', e.target.value)}
                    />
                    <Select
                        options={[
                            { value: '', label: 'All Agents' },
                            { value: 'Agent Smith', label: 'Agent Smith' },
                        ]}
                        value={filter.agent}
                        onChange={(e) => handleFilterChange('agent', e.target.value)}
                    />
                </div>
                <Button variant="primary">New Ticket</Button>
            </div>

            <Card className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Requester</th>
                            <th>Subject</th>
                            <th>Priority</th>
                            <th>Agent</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTickets.map(ticket => (
                            <tr key={ticket.id}>
                                <td className={styles.idCell}>{ticket.id}</td>
                                <td>
                                    <div className={styles.userCell}>
                                        <img src={ticket.requester.avatar} alt="" className={styles.avatar} />
                                        <span>{ticket.requester.name}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.subject}>{ticket.subject}</span>
                                    <span className={styles.category}>{ticket.category}</span>
                                </td>
                                <td><Badge status={ticket.priority} /></td>
                                <td>{ticket.agent ? ticket.agent.name : <span className={styles.unassigned}>Unassigned</span>}</td>
                                <td><Badge status={ticket.status} /></td>
                                <td>
                                    <div className={styles.actions}>
                                        <button className={styles.iconBtn}><FiEdit /></button>
                                        <button className={styles.iconBtn} onClick={() => handleDelete(ticket.id)}><FiTrash2 /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredTickets.length === 0 && (
                            <tr>
                                <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>No tickets found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className={styles.pagination}>
                    <span>Showing 1 to {filteredTickets.length} of {filteredTickets.length} entries</span>
                    <div className={styles.pageControls}>
                        <Button variant="secondary" size="sm" disabled>Previous</Button>
                        <Button variant="secondary" size="sm" disabled>Next</Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

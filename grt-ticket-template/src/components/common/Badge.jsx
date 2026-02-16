
import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({ status = 'default' }) => {
    const statusLower = status.toLowerCase();

    // Map specific statuses to semantic types if needed, or rely on CSS classes matching status names
    let type = 'default';
    if (['open', 'new'].includes(statusLower)) type = 'info';
    if (['closed', 'resolved'].includes(statusLower)) type = 'success';
    if (['pending', 'medium'].includes(statusLower)) type = 'warning';
    if (['high', 'urgent', 'critical'].includes(statusLower)) type = 'danger';

    return (
        <span className={`${styles.badge} ${styles[type]}`}>
            {status}
        </span>
    );
};

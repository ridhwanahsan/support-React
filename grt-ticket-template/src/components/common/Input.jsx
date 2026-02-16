
import React from 'react';
import styles from './Input.module.css';

export const Input = ({ label, type = 'text', error, ...props }) => {
    return (
        <div className={styles.group}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={`${styles.input} ${error ? styles.errorInput : ''}`}
                type={type}
                {...props}
            />
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
};

export const Select = ({ label, options, error, ...props }) => {
    return (
        <div className={styles.group}>
            {label && <label className={styles.label}>{label}</label>}
            <select
                className={`${styles.input} ${styles.select} ${error ? styles.errorInput : ''}`}
                {...props}
            >
                {options.map((opt, i) => (
                    <option key={i} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
};

export const Textarea = ({ label, error, ...props }) => {
    return (
        <div className={styles.group}>
            {label && <label className={styles.label}>{label}</label>}
            <textarea
                className={`${styles.input} ${styles.textarea} ${error ? styles.errorInput : ''}`}
                rows={4}
                {...props}
            />
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    );
};

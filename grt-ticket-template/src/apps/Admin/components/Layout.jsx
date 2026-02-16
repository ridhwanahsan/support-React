
import React, { useState } from 'react';
import {
    FiHome, FiList, FiSettings, FiMenu, FiX, FiLogOut
} from 'react-icons/fi';
import styles from '../styles/Layout.module.css';

export const AdminLayout = ({ children, activePage, onNavigate }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <FiHome /> },
        { id: 'tickets', label: 'Tickets', icon: <FiList /> },
        { id: 'settings', label: 'Settings', icon: <FiSettings /> },
    ];

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
                <div className={styles.logoArea}>
                    <h2>GRT Support</h2>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <FiX />
                    </button>
                </div>

                <nav className={styles.nav}>
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            className={`${styles.navItem} ${activePage === item.id ? styles.active : ''}`}
                            onClick={() => {
                                onNavigate(item.id);
                                setSidebarOpen(false);
                            }}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className={styles.footer}>
                    <button className={styles.navItem}>
                        <FiLogOut />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.main}>
                <header className={styles.topbar}>
                    <button
                        className={styles.menuBtn}
                        onClick={() => setSidebarOpen(true)}
                    >
                        <FiMenu />
                    </button>
                    <div className={styles.userProfile}>
                        <img
                            src="https://i.pravatar.cc/150?u=1"
                            alt="Admin"
                            className={styles.avatar}
                        />
                        <span className={styles.userName}>Admin User</span>
                    </div>
                </header>

                <div className={styles.content}>
                    {children}
                </div>
            </main>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

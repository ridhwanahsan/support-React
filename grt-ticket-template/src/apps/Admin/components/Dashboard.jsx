
import React from 'react';
import {
    PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
    FiUsers, FiMessageSquare, FiCheckCircle, FiClock, FiBriefcase, FiLayers, FiStar
} from 'react-icons/fi';
import { Card } from '../../../components/common/Card';
import { stats } from '../../../data/mock';
import styles from '../styles/Dashboard.module.css';

const StatCard = ({ title, value, icon, color }) => (
    <div className={styles.statCard}>
        <div className={styles.statIcon} style={{ backgroundColor: color }}>
            {icon}
        </div>
        <div className={styles.statInfo}>
            <h3>{value}</h3>
            <p>{title}</p>
        </div>
    </div>
);

const SummaryWidget = ({ label, value, subtext }) => (
    <div className={styles.summaryWidget}>
        <div className={styles.summaryValue}>{value}</div>
        <div className={styles.summaryLabel}>{label}</div>
        {subtext && <div className={styles.summarySub}>{subtext}</div>}
    </div>
);

export const Dashboard = () => {
    return (
        <div className={styles.dashboard}>

            {/* 1. Entity Stats Cards (Agents, Customers, Departments, Projects) */}
            <div className={styles.statsGrid}>
                <StatCard title="Agents" value={stats.entities.agents} icon={<FiUsers />} color="#e5f5fa" />
                <StatCard title="Customers" value={stats.entities.customers} icon={<FiUsers />} color="#fff8e5" />
                <StatCard title="Departments" value={stats.entities.departments} icon={<FiLayers />} color="#edf8ee" />
                <StatCard title="Projects" value={stats.entities.projects} icon={<FiBriefcase />} color="#f0f0f1" />
            </div>

            {/* 2. Summary Widgets & Rating */}
            <div className={styles.summarySection}>
                <Card className={styles.summaryCard}>
                    <h3>Ticket Activity</h3>
                    <div className={styles.summaryRow}>
                        <SummaryWidget label="Total Tickets" value={stats.total} />
                        <SummaryWidget label="Open" value={stats.open} />
                        <SummaryWidget label="New Today" value={stats.newToday} subtext="+12% from yesterday" />
                        <SummaryWidget label="Avg Resolution" value={stats.avgResolution} />
                    </div>
                </Card>

                <Card className={styles.ratingCard}>
                    <h3>Customer Satisfaction</h3>
                    <div className={styles.ratingContent}>
                        <div className={styles.ratingValue}>{stats.rating}</div>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <FiStar key={i} fill={i < Math.round(stats.rating) ? "#ffb900" : "none"} color="#ffb900" />
                            ))}
                        </div>
                        <div className={styles.ratingLabel}>Average Rating</div>
                    </div>
                </Card>
            </div>

            {/* 3. Charts */}
            <div className={styles.chartsGrid}>
                {/* Status Chart */}
                <Card title="Ticket Status">
                    <div style={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={stats.breakdown}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {stats.breakdown.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Priority Chart */}
                <Card title="Priority Breakdown">
                    <div style={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats.priority}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#0073aa" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                {/* Products Chart */}
                <Card title="Tickets per Product">
                    <div style={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats.products} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" width={80} />
                                <Tooltip />
                                <Bar dataKey="value" fill="#46b450" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
        </div>
    );
};

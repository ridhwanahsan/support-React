
import React, { useState } from 'react';
import { FiSend, FiPaperclip, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { Button } from '../../../components/common/Button';
import { Badge } from '../../../components/common/Badge';
import { Textarea } from '../../../components/common/Input';
import styles from '../styles/ChatInterface.module.css';

export const ChatInterface = ({ ticket }) => {
    const [message, setMessage] = useState('');

    // Mock current user
    const currentUser = { id: 3, name: "Jane Doe" }; // Example customer ID

    // Merge ticket messages with some local state for demo
    const [messages, setMessages] = useState(ticket.messages || []);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        const newMessage = {
            id: Date.now(),
            sender: currentUser,
            text: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setMessage('');
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div>
                    <div className={styles.headerTop}>
                        <h2 className={styles.subject}>{ticket.subject}</h2>
                        <Badge status={ticket.status} />
                    </div>
                    <p className={styles.meta}>
                        Ticket {ticket.id} • Assigned to: {ticket.agent ? ticket.agent.name : 'Unassigned'}
                    </p>
                </div>
                <div className={styles.headerActions}>
                    <Button variant="secondary" size="sm">
                        <FiPhone style={{ marginRight: 5 }} /> Call Us
                    </Button>
                    <Button variant="secondary" size="sm">
                        <FiMessageCircle style={{ marginRight: 5 }} /> SMS Us
                    </Button>
                </div>
            </div>

            {/* Messages Area */}
            <div className={styles.messagesArea}>
                {messages.length === 0 && (
                    <div className={styles.emptyMessages}>No messages yet. Start the conversation!</div>
                )}
                {messages.map(msg => {
                    const isMe = msg.sender.id === currentUser.id;
                    return (
                        <div key={msg.id} className={`${styles.messageRow} ${isMe ? styles.rowRight : styles.rowLeft}`}>
                            {!isMe && (
                                <div className={styles.avatar}>
                                    {msg.sender.name.charAt(0)}
                                </div>
                            )}
                            <div className={`${styles.bubble} ${isMe ? styles.bubbleRight : styles.bubbleLeft}`}>
                                <div className={styles.senderName}>{isMe ? 'You' : msg.sender.name}</div>
                                <div className={styles.text}>{msg.text}</div>
                                <div className={styles.time}>{msg.time}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Input Area */}
            <div className={styles.inputArea}>
                <form onSubmit={handleSend} className={styles.inputForm}>
                    <button type="button" className={styles.attachBtn}>
                        <FiPaperclip />
                    </button>
                    <div className={styles.inputWrapper}>
                        <Textarea
                            placeholder="Type your reply..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ marginBottom: 0, minHeight: '40px' }}
                            rows={1}
                        />
                    </div>
                    <Button type="submit" variant="primary">
                        <FiSend />
                    </Button>
                </form>
            </div>
        </div>
    );
};

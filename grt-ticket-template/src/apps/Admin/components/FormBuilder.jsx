
import React, { useState } from 'react';
import { FiPlus, FiTrash2, FiMove, FiType, FiList, FiCalendar, FiLink } from 'react-icons/fi';
import { Card } from '../../../components/common/Card';
import { Button } from '../../../components/common/Button';
import { Input, Select } from '../../../components/common/Input';
import styles from '../styles/FormBuilder.module.css';

const FIELD_TYPES = [
    { value: 'text', label: 'Text Input', icon: <FiType /> },
    { value: 'select', label: 'Dropdown', icon: <FiList /> },
    { value: 'date', label: 'Date Picker', icon: <FiCalendar /> },
    { value: 'url', label: 'URL / Link', icon: <FiLink /> },
];

export const FormBuilder = () => {
    const [fields, setFields] = useState([
        { id: 1, type: 'text', label: 'Device Model', required: true },
        { id: 2, type: 'date', label: 'Purchase Date', required: false },
    ]);

    const addField = () => {
        const newField = {
            id: Date.now(),
            type: 'text',
            label: 'New Field',
            required: false
        };
        setFields([...fields, newField]);
    };

    const removeField = (id) => {
        setFields(fields.filter(f => f.id !== id));
    };

    const updateField = (id, key, value) => {
        setFields(fields.map(f => f.id === id ? { ...f, [key]: value } : f));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Ticket Form Builder</h2>
                <Button variant="primary" onClick={addField}>
                    <FiPlus style={{ marginRight: 5 }} /> Add Field
                </Button>
            </div>

            <div className={styles.builderArea}>
                {fields.map((field, index) => (
                    <Card key={field.id} className={styles.fieldCard}>
                        <div className={styles.fieldHeader}>
                            <div className={styles.dragHandle}>
                                <FiMove />
                                <span className={styles.fieldIndex}>Field {index + 1}</span>
                            </div>
                            <button className={styles.deleteBtn} onClick={() => removeField(field.id)}>
                                <FiTrash2 />
                            </button>
                        </div>

                        <div className={styles.fieldBody}>
                            <div className={styles.row}>
                                <Input
                                    label="Field Label"
                                    value={field.label}
                                    onChange={(e) => updateField(field.id, 'label', e.target.value)}
                                />
                                <Select
                                    label="Field Type"
                                    value={field.type}
                                    options={FIELD_TYPES}
                                    onChange={(e) => updateField(field.id, 'type', e.target.value)}
                                />
                            </div>
                            <div className={styles.optionsRow}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        checked={field.required}
                                        onChange={(e) => updateField(field.id, 'required', e.target.checked)}
                                    />
                                    Required Field
                                </label>

                                {field.type === 'select' && (
                                    <Input
                                        placeholder="Options (comma separated)"
                                        className={styles.optionsInput}
                                    />
                                )}
                            </div>
                        </div>
                    </Card>
                ))}

                {fields.length === 0 && (
                    <div className={styles.emptyState}>
                        No custom fields added. Click "Add Field" to start.
                    </div>
                )}
            </div>

            <div className={styles.footer}>
                <Button variant="primary" size="lg">Save Form Layout</Button>
            </div>
        </div>
    );
};

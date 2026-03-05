import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface Task {
    id: string;
    text: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.textContainer} onPress={() => onToggle(task.id)}>
                <View style={[styles.checkbox, task.completed && styles.checkboxCompleted]} />
                <Text style={[styles.text, task.completed && styles.textCompleted]}>
                    {task.text}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(task.id)}>
                <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 3,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#007AFF',
        marginRight: 12,
    },
    checkboxCompleted: {
        backgroundColor: '#007AFF',
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    textCompleted: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    deleteButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FF3B30',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: -2,
    },
});

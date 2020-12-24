import React from 'react';
import { Students } from '../components';
import studentsData from '../data/students.json';

export function StudentsContainer(){
    return(
        <Students>
            <Students.Title>Student List</Students.Title>
            <Students.Frame>
            {studentsData.map((item) => (
                <Students.Item key={item.id}>
                    <Students.Header>{item.name}</Students.Header>
                </Students.Item>
            ))}
            </Students.Frame>
        </Students>
    )
}
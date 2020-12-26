import React from 'react';
import { Students } from '../components';
import studentsData from '../data/students.json';
import { Link } from 'react-router-dom';

export function StudentsContainer(){
    return(
        <Students>
            <Students.Title>Student List</Students.Title>
            <Students.Frame>
            {studentsData.map((item) => (
                <Link to="/courses">
                    <Students.Item key={item.id}>
                        <Students.Header>{item.name}</Students.Header>
                    </Students.Item>
                </Link>
            ))}
            </Students.Frame>
        </Students>
    )
}
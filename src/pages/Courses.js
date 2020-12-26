import React, { useState } from 'react';
import { Form } from '../components';
import {courseData} from '../data/courses';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';

const ListItem = ({ title, code, id, onRemoveClick }) => (
    <div>
      {code} - {title}
      <span> </span>
      <Form.Submit onClick={() => onRemoveClick(id)}>Remove</Form.Submit>
    </div>
  );

export default function CoursePage(){
    const [courseList, setCourseList] = useState(courseData);
    const [newCode, setCode] = useState("");
    const [newTitle, setTitle] = useState("Title");

    const addCourse = () => {
        const newCourse = [
          ...courseList,
          { id: courseList.length, title: newTitle, code: newCode }
        ];
        setCourseList(courseList);
      };

      const removeCourse = id => {
        setCourseList(courseList.filter(item => item.id !== id));
      };

    return(
        <>
            <HeaderContainer />
            <Form style={{maxWidth: 700}}>
                <Form.Title>Course List</Form.Title>
                <Form.Base style={{maxWidth: 700}}>
                    <Form.Text>Code</Form.Text>
                    <Form.Input
                        type="text" 
                        onChange={e => setCode(e.target.value)} 
                        value={newCode} 
                        placeholder="Code. e.g. CS102" 
                    />

                    <Form.Submit onClick={addCourse}>Add Course</Form.Submit>
                    {courseList.map(item => (
                        <ListItem style={{color: "white"}} key={item.id} { ...item } onRemoveClick={removeCourse} />
                    ))}
                </Form.Base>
            </Form>
            <FooterContainer />
        </>
    )
}
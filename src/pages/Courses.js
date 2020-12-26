import React, { useState, useContext } from 'react';
import { Form } from '../components';
import {courseData} from '../data/courses';
import { Header } from '../components';
import { FooterContainer } from '../containers/Footer';
import * as ROUTES from '../routes/routes';
import { FirebaseContext } from '../context/firebase';
import { Link } from 'react-router-dom';

const ListItem = ({ title, code, id, onRemoveClick }) => (
    <div  style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", color: "white", width: "100%"}}>
      {code} - {title}
      <span> </span>
      <Form.Submit style={{padding:"8px 12px"}} onClick={() => onRemoveClick(id)}>Remove</Form.Submit>
    </div>
  );

export default function CoursePage(){
    const [courseList, setCourseList] = useState(courseData);
    const [newCode, setCode] = useState("");
    const [newTitle, setTitle] = useState("");

    const { firebase } = useContext(FirebaseContext);

    const addCourse = () => {
        const newCourse = [
          ...courseList,
          { id: courseList.length, title: newTitle, code: newCode }
        ];
        setCourseList(newCourse);
      };

      const removeCourse = id => {
        setCourseList(courseList.filter(item => item.id !== id));
      };

    return(
        <>
            <Header>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.ADMIN} src="./images/logo.svg" alt="Admin" />
                    </Header.Group>
                    
                    <Header.Group>
                        <Header.Profile>
                            <Header.Picture src="./images/avatar.jpg" />

                            <Header.Group>
                                <Header.Link>
                                    <Link to="/admin" style={{textDecoration:"none", color:"#fff"}}>Students</Link>
                                </Header.Link>
                                <Header.Link onClick={() => firebase.auth().signOut()}>
                                    Sign Out
                                </Header.Link>
                            </Header.Group>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
            </Header>
            <Form style={{maxWidth: 800, marginTop:30, marginBottom:30}}>
                <Form.Title>Course List</Form.Title>
                <Form.Base style={{maxWidth: 700}}>
                    <Form.Text>Code</Form.Text>
                    <Form.Input
                        type="text" 
                        onChange={e => setCode(e.currentTarget.value)} 
                        value={newCode} 
                        placeholder="Code. e.g. CS102" 
                    />

                    <Form.Text>Title</Form.Text>
                    <Form.Input
                        type="text" 
                        onChange={e => setTitle(e.currentTarget.value)} 
                        value={newTitle} 
                        placeholder="Title e.g. Introduction to CS" 
                    />

                    <Form.Submit style={{width:"50%", alignSelf: "center", padding:"12px 14px"}} onClick={addCourse}>Add Course</Form.Submit>
                    {courseList.map(item => (
                        <ListItem key={item.id} { ...item } onRemoveClick={removeCourse} />
                    ))}
                </Form.Base>
            </Form>
            <div style={{margin:"auto", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <details >
                    <summary>Debugging(View Course Data Object)</summary>
                    <pre>{JSON.stringify(courseList, null, 2)}</pre>
                </details>
            </div>
            <FooterContainer />
        </>
    )
}
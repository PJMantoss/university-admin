import React, { useRef } from 'react';
import courseData from '../../data/courses.json';
import './styles.css'

export default function Courses(){
    return (
        <div>
            <CourseList />
            <AddCourse />
            <RemoveCourse />
        </div>
    )
}

const CourseList = () => {
    return(
        <div className="container">
            <ul className="course-list">
                {Object.keys(courseData).map(course => (
                    <li className="course-item">{courseData[course]}</li>
                ))}
            </ul>
        </div>
    )
}

const AddCourse = () => {
    const ref = useRef(null);

    const createCourse = (e) => {
        e.preventDefault();

        //Get the course name from the form
        let course = ref.courseName.value

        //call the addCourse method
        if(courseData.length > 0){
            AddCourse(course);
        }

        //reset form
        ref.courseForm.reset();
    }

    return(
        <form ref="courseForm" onSubmit={createCourse}>
            <div className="form-group">
                <label for="courseItem">
                    <input type="text" id="courseItem" className="form-control" ref="courseName" />
                </label>
            </div>
            <button type="submit" className="submit-btn">Add Course</button>
        </form>
    )
}
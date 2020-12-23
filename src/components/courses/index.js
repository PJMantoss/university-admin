import React, { useRef } from 'react';
import courseData from '../../data/courses.json';
import './styles.css'

export default function Courses(){
    return (
        <div>
            <CourseList />
            <AddCourseForm />
            <RemoveCourseForm />
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

const AddCourseForm = () => {
    const ref = useRef(null);

    const createCourse = e => {
        e.preventDefault();

        //Get the course name from the form
        let course = ref.courseName.value

        //call the addCourse method
        if(courseData.length > 0){
            addCourse(course);
        }

        //reset form
        ref.courseForm.reset();
    }

    return(
        <form ref="courseForm" onSubmit={createCourse}>
            <div className="form-group">
                <label for="courseItem">
                    Course List
                    <input type="text" id="courseItem" className="form-control" ref="courseName" />
                </label>
            </div>
            <button type="submit" className="submit-btn">Add Course</button>
        </form>
    )
}

const RemoveCourseForm = () => {
    const ref = useRef(null);

    const selectCourseToRemove = e => {
    let course = e.target.value;

    //call the removeCourse() method
    removeCourse(course);

    //reset form
    ref.removeCourseForm.reset();
    }

    return(
        <form ref="removeCourseForm" onChange={selectCourseToRemove}>
            <div className="form-group">
                <label for="courseItem">
                    <select id="select-course" className="form-control">
                        <option value=""></option>
                            {
                                Object.keys(courseData).map(course => (
                                    <option value={course}>{courseData[course]}</option>
                                ))
                            }
                    </select>
                </label>
            </div>
            <button type="submit" className="submit-btn">Add Course</button>
        </form>
    )
}
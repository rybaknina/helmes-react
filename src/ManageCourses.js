import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import * as api from "./api/courseApi";
import Input from "./Input";

const newCourse = { id: null, title: "", author: "" };

function ManageCourses(){
  // This will hold the course that we're adding in state
  const [course, setCourse] = useState(newCourse);
  const [saveCompleted, setSaveCompleted] = useState(false);
  const [errors, setErrors] = useState({});

  function onChange(event) {
    // Copy existing course from state and set title
    // Using computed property syntax to set a property using a variable
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  function validateCourse() {
    const _errors = {};
    if(!course.title) _errors.title = "Titles is required.";
    if(!course.author) _errors.author = "Author is required.";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  function addCourse(event) {
    event.preventDefault(); // stop browser from posting back
    if (!validateCourse()) return;
    // Use object spread to create a new array of courses
    // Add the new course entered on the form to the new courses array
    api.addCourses(course).then(savedCourse => {
      // redirect
      setSaveCompleted(true);
    });
  }
  return (
    <form onSubmit={addCourse}>
      <h1>Add Course</h1>
      {saveCompleted && <Redirect to="/courses" />}

      <Input
        id="title"
        value={course.title}
        label="Title"
        onChange={onChange}
        error={errors.title}
        name="title"
      />

      <Input
        id="author"
        label="Author"
        value={course.author}
        onChange={onChange}
        error={errors.author}
        name="author"
      />

      <input type="submit" value="Add Course" />
    </form>
  );
      }

export default ManageCourses;
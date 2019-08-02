import React, { useState, useEffect } from "react";
import * as api from "./api/courseApi";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
//import mapDispatchToProps from 'react-redux/es/connect/mapDispatchToProps';
import {bindActionCreators} from 'redux';
import  * as courseActions from "./redux/actions/courseActions";

// 2 ways to declare React components:
// 1. Class
// 2. Function <- Prefer this. It's simpler. Easier to use

function Courses(props) {
  // This runs after render
  useEffect(() => {
    props.actions.loadCourses();
    //api.getCourses().then(courses => setCourses(courses));
  }, [props.actions]);

  async function deleteCourse(id) {
  //  await api.deleteCourse(id);
  //  const updatedCourses = courses.filter(course => course.id !== id);
  //  setCourses(updatedCourses); // Updating state will cause React to re-render
  }

  function renderCourses() {
    if (props.courses.length === 0) return <p> No courses.</p>;

    return (
      <>
        {/* Exercise: Display delete button, title, and author in a table. */}
        <table className="table">
          <thead>
          <tr>
            <th />
            <th>Title</th>
            <th>Author</th>
          </tr>
          </thead>
          <tbody>
          {props.courses.map(course => (
            <tr key={course.id}>
              <td>
                <button className="btn btn-danger" onClick={() => deleteCourse(course.id)}>
                  Delete
                </button>{" "}
              </td>
              <td>{course.title}</td>
              <td>{course.author}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <h1>Courses</h1>
      <Link to="/course">Add Course</Link>
      {renderCourses()}
    </>
  );
}
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
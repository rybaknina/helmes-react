import * as api from "../../api/courseApi";

export function loadCoursesSuccess(courses) {
  return {type: "LOAD_COURSES_SUCCESS", courses: courses};
}
export function loadCourses() {
  return function (dispatch){
    return api
      .getCourses()
      .then( courses => dispatch(loadCoursesSuccess(courses)));
  };
}
export function getCourses() {
  return fetch("http://localhost:3001/courses").then(response=>{
    if (response.ok) return response.json();
    throw  new Error("Bad network response");
  }).catch(error=>{
    console.error(error);
  throw error;
  })
}

export function addCourses(course) {
  return fetch("http://localhost:3001/courses", {method: "POST", headers:{
    "Content-Type":"application/json"},
    body:JSON.stringify(course)}).then(response=>{
    if (response.ok) return response.json();
    throw  new Error("Bad network response");
  }).catch(error=>{
    console.error(error);
    throw error;
  })
}

export async function deleteCourse(courseId) {
  try {
    const response = await fetch("http://localhost:3001/courses/" + courseId, {
      method: "DELETE"
    });
    if (response.ok) return await response.json(); // return the response as json
    throw new Error("Bad network response");
  } catch (error) {
    console.error(error);
    throw error;
  }
}
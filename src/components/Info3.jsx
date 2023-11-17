import React from 'react'
import ObjCourse from './ObjCourse';

const Info3 = () => {
    const course = ObjCourse();
  return (
    <h2>{course.parts[2].name} {course.parts[2].exercises}</h2>
  )
}

export default Info3
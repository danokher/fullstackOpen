import React from 'react'
import ObjCourse from './ObjCourse';

const Info2 = () => {
    const course = ObjCourse();
  return (
    <h2>{course.parts[1].name} {course.parts[1].exercises}</h2>
  )
}

export default Info2
import React from 'react'
import ObjCourse from './ObjCourse';

const Info1 = () => {
    const course = ObjCourse();
  return (
    <h2>{course.parts[0].name} {course.parts[0].exercises}</h2>
  )
}

export default Info1
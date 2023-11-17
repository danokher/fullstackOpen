import React from 'react'
import ObjCourse from './ObjCourse'

const Nombre = () => {
    const course = ObjCourse();
  return (
    <h1>{course.name}</h1>
  )
}

export default Nombre
import { workExperience } from '@/data'
import React from 'react'

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="heading">
            My {' '}
            <span className="text-purple">Work Experience.</span>
        </h1>
        <div className="m-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map(({}) => (
                <div></div>
            ))}
        </div>
    </div>
  )
}

export default Experience
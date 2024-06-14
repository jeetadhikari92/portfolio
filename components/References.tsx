import { companies, testimonials } from '@/data'
import React from 'react'
import { InfiniteMovingCards } from './ui/InfinitieMovingCards'

const References = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="heading">
            Kind words from {" "}
            <span className="text-purple">people I worked with.</span>
        </h1>
        <div className="flex flex-col items-center mt-10">
            <InfiniteMovingCards 
                items={testimonials}
                direction="left"
                speed="slow"    
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 bg-white px-10 mt-10'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img loading="lazy" src={nameImg} alt={name} className="md:w-24 w-20" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default References
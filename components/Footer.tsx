import { socialMedia } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Have some <span className='text-purple'>interesting</span> to tell me?</h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss about it.</p>
            <a href='mailto:jeet.adhikari1992@gmail.com'>
                <MagicButton title='Let get in touch' icon={<FaLocationArrow />} position="right" />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-small md:font-normal font-light'>Copyright © 2024 Jeet Adhikari</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map(profile => (
                    <a key={profile.id} href={profile.link} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <img src={profile.img} alt={profile.img} width={20} height={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
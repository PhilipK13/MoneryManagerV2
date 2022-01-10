import Navigation from '@components/Navigation'
import React, { useEffect } from 'react'
import Image from 'next/image'
import headshot from '../../Assets/IMG_9829_.jpg'

export default function home() {

    return (
        <div>
            <Navigation/>
            <div className='h-screen bg-cWhite'>
                {/* Main container */}
                <div className='flex flex-col items-center mx-6'>
                    {/* Header */}
                    <div className='XL-text'>
                        <h1>All About Me</h1>
                    </div>
                    {/* All About Me container */}
                    <div className='flex flex-col items-center pt-4 rounded-xl w-full bg-gray-200'>
                        {/* Body */}
                        <div className='flex sm:flex-col md:flex-row'>
                            <div className='max-w-sm border-2 border-cBlue'>
                                <Image src={headshot}/>
                            </div>
                            <p>
                                <span id="highlight">Curious</span>. That is the word I would choose
                                if I could use only one to describe myself. I'm always interested in
                                <span id="highlight">learning</span> new things. If I come across
                                new facts or information, I have a compelling urge to investigate,
                                explore and dive into the <span id="highlight">unknown</span>.
                                
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

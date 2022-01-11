import Navigation from '@components/Navigation'
import React, { useEffect } from 'react'
import Image from 'next/image'
import headshot from '../../Assets/IMG_9829_.jpg'
import { Book, Controller, Email, Github, LinkedIn, Weight } from '@components/Icons'

export default function home() {

    return (
        <div>
            <Navigation/>
            <div className='h-screen'>
                {/* Main container */}
                <div className='flex flex-col items-center bg-cWhite'>
                    {/* Header */}
                    <div className='XL-text'>
                        <h1>All About Me</h1>
                    </div>
                    {/* All About Me container */}
                    <div className='flex flex-col items-center pt-8 rounded-xl w-5/6 bg-gray-200'>
                        {/* Body */}
                        <div className='flex flex-col md:flex-row items-center'>
                            <div className='md:ml-12 max-w-sm md:max-w-lg border-2 border-cBlue'>
                                <Image src={headshot}/>
                            </div>
                            <div className='mx-20 my-12 text-lg '>
                                <p>
                                    <span className='text-cBlue'>Curious</span>. That is the word I would choose
                                    if I could use only one to describe myself. I'm always interested in
                                    <span className='text-cBlue'> learning</span> new things. If I come across
                                    new facts or information, I have a compelling urge to investigate,
                                    explore and dive into the <span className='text-cBlue'>unknown</span>.
                                    
                                </p>
                            </div>
                        </div>
                        <div className='border-t-2 border-cBlue mx-20 w-5/6 mt-8 '></div>
                        <div className='flex flex-col my-12 w-full items-center'>
                            <div className='text-3xl my-12'>
                                <h1>Some of my favourite hobbies</h1>
                            </div>
                            <div className='flex flex-row my-4 w-full items-center justify-evenly'>
                                <Weight className='w-20 h-20'></Weight>
                                <p>Working Out - Don't skip leg day</p>
                            </div>
                            <div className='flex flex-row my-4 w-full items-center justify-evenly'>
                                <Controller className='w-20 h-20'></Controller>
                                <p>Games - Video, board, and creating</p>
                            </div>
                            <div className='flex flex-row my-4 w-full items-center justify-evenly'>
                                <Book className='w-20 h-20'></Book>
                                <p>Reading - Dune, Harry Potter, Manga</p>
                            </div>
                        </div>
                        <div className='flex my-12 w-5/6 items-center justify-evenly flex-wrap'>
                            <div className='flex flex-row items-center justify-evenly'>
                                <Github className='w-12 h-12 mx-4'></Github>
                                <p>PhilipK13</p>
                            </div>
                            <div className='flex flex-row items-center justify-evenly'>
                                <Email className='w-12 h-12 mx-4'></Email>
                                <p>philipkennedy13@gmail.com</p>
                            </div>
                            <div className='flex flex-row items-center justify-evenly'>
                                <LinkedIn className='w-12 h-12 mx-4'></LinkedIn>
                                <p>philipkennedy</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

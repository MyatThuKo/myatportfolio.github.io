import React, { useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';


function Experiences(props) {

    const dropdownRef = useRef();
    const [dropdownOpen, setDropdown] = useState(false);

    const toggleDropdown = () => {
        dropdownRef.current.classList.toggle('hidden');
        setDropdown(!dropdownOpen);
    };

    return (
        <div>
            <div onClick={toggleDropdown} className='flex justify-center'>
                <h1 className='text-4xl text-center font-semibold'>Education</h1>
                {dropdownOpen ?
                    <MdKeyboardArrowUp size={32} className='mt-2' /> :
                    <MdKeyboardArrowDown size={32} className='mt-2' />}
            </div>
            <div className='hidden' ref={dropdownRef}>
                <div className='flex flex-col md:flex-row gap-8 mt-4'>
                    <div className={`bg-${props.theme} w-full md:w-2/6 shadow-md rounded`}>
                        <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
                            <img src='m1-logo.png' className='ml-4' />
                        </div>
                        <div className='p-4'>
                            <h1 className='text-xl font-medium'>M1 Finance</h1>
                            <p className=''>Mobile Engineering Intern - iOS</p>
                            <p className='text-sm'>May 2022 - Present</p>
                        </div>
                    </div>

                    <div className={`bg-${props.theme} w-full md:w-2/6 shadow-md rounded`}>
                        <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
                            <img src='nike-logo.png' layout="fill" objectFit="cover" className='mt-16 px-4' />
                        </div>
                        <div className='p-4'>
                            <h1 className='text-xl font-medium'>Nike NYC</h1>
                            <p className=''>Athlete</p>
                            <p className='text-sm'>Mar 2022 - May 2022</p>
                        </div>
                    </div>

                    <div className={`bg-${props.theme} w-full md:w-2/6 shadow-md rounded`}>
                        <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
                            <img src='bunny-macbook.png' className='object-cover h-full mx-24' />
                        </div>
                        <div className='p-4'>
                            <h1 className='text-xl font-medium'>MarketFly LLC. (Now Terminated)</h1>
                            <p className=''>Web Developer Intern</p>
                            <p className='text-sm'>Mar 2021 - Jun 2021</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-8 mt-4'>
                    <div className={`bg-${props.theme} w-full md:w-2/6 shadow-md rounded`}>
                        <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
                            <img src='codeucate-logo.png' className='mt-24 px-4' />
                        </div>
                        <div className='p-4'>
                            <h1 className='text-xl font-medium'>Codeucate</h1>
                            <p className=''>Software Developer Intern</p>
                            <p className='text-sm'>Jul 2020 - Dec 2020</p>
                        </div>
                    </div>

                    <div className={`bg-${props.theme} w-full md:w-2/6 shadow-md rounded`}>
                        <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
                            <img src='apple-logo.png' className='mx-auto' />
                        </div>
                        <div className='p-4'>
                            <h1 className='text-xl font-medium'>Apple Fifth Ave Store</h1>
                            <p className=''>Specialist</p>
                            <p className='text-sm'>Oct 2019 - Jul 2020</p>
                        </div>
                    </div>

                    <div className={`bg-${props.theme} w-full md:w-2/6 shadow-md rounded`}>
                        <div className='h-48 md:h-56 rounded-t-md relative overflow-hidden'>
                            <img src='bmcc-logo-black.png' className='mt-24 px-4' />
                        </div>
                        <div className='p-4'>
                            <h1 className='text-xl font-medium'>Borough of Manhattan Community College</h1>
                            <p className=''>College Assistant</p>
                            <p className='text-sm'>Jan 2018 - May 2019</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
    )
}

export default Experiences; 
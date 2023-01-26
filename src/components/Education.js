import React, { useRef, useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function Education(props) {

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

            <div className={`mt-4 flex flex-col md:flex-row gap-2 ${dropdownOpen ? 'hidden' : ''}`} ref={dropdownRef}>
                <div className={`bg-${props.theme} w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center gap-1`}>
                    {props.theme === 'light' ? (
                        <img src='ccny-logo-black.png' className='w-48' alt='ccny-logo-black' />
                    ) : (
                        <img src='ccny-logo-white.png' className='w-48' alt='ccny-logo-white' />
                    )}
                    <h2 className='text-2xl'>Bachelor of Science</h2>
                    <ul class="list-outside list-disc">
                        <li>Computer Science Major</li>
                        <li>GPA - 3.62</li>
                        <li>Aug 2020 - Present</li>
                    </ul>
                </div>

                <div className={`bg-${props.theme} w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center gap-1`}>
                    {props.theme === 'light' ? (
                        <img src='bmcc-logo-black.png' className='w-48' alt='bmcc-logo-black' />
                    ) : (
                        <img src='bmcc-logo-white.png' className='w-48' alt='bmcc-logo-white' />
                    )}
                    <br />
                    <h2 className='text-2xl'>Associate in Science (Honors)</h2>
                    <ul class="list-outside list-disc">
                        <li>Computer Science Major</li>
                        <li>GPA - 3.97</li>
                        <li>Aug 2017 - May 2019</li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
    )
}

export default Education; 
import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillEnvironment, AiFillPhone } from 'react-icons/ai'


function Footer(props) {
    const IconLink = ({ icon, link }) => {
        return (
            <a href={link} target='_blank' rel="noreferrer">
                <div className={`hover:bg-gradient-to-r ${props.theme === 'light' ? 'from-rose-300 to-sky-300' : 'from-rose-600 to-sky-600'
                    }  shadow-xl rounded-md`}>
                    {icon}
                </div>
            </a>
        );
    }

    const LinkedInIcon = () => {
        return (
            <IconLink icon={<AiFillLinkedin />} link='https://www.linkedin.com/in/myatthuko13/' />
        );
    }

    const GitHubIcon = () => {
        return (
            <IconLink icon={<AiFillGithub />} link='https://github.com/MyatThuKo' />
        );
    }

    const copyright = `© ${new Date().getFullYear()} Myat Thu Ko. All Rights Reserved.`

    const isMobile = () => {
        // Check if the device is a mobile device
        return /(android|iphone|ipad|ipod|blackberry|windows phone)/i.test(navigator.userAgent);
    }

    return (
        <div className='mt-5 rounded py-8 px-8'>
            <div className='md:text-center'>
                <h1 className='font-medium text-lg'>Contact Me</h1>
                <ul className='md:flex justify-center gap-4'>
                    <li className='flex items-center gap-2'>
                        <AiFillMail />
                        <p>nymyatthuko@gmail.com</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <AiFillEnvironment />
                        <p>New York, NY</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        {isMobile() ? (
                            <div className='flex items-center gap-2'>
                                <AiFillPhone />
                                <a href='tel:13477073462'>3477073462</a>
                            </div>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <AiFillPhone />
                                <p>347-707-3462</p>
                            </div>
                        )}
                    </li>
                </ul>

                <div className={'text-5xl py-4 flex justify-center gap-16'}>
                    <LinkedInIcon />
                    <GitHubIcon />
                </div>


                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <p className="text-center text-sm sm:text-center">{copyright}</p>
            </div>
        </div>
    )
}

export default Footer; 
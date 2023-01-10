import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'


function Profile(props) {
    const IconLink = ({ icon, link }) => {
        return (
            <a href={link} target='_blank' rel="noreferrer">
                <div
                    className=
                    {`hover:bg-gradient-to-r ${props.theme === 'light' ?
                        'from-rose-300 to-sky-300' : 'from-rose-600 to-sky-600'
                        } shadow-xl rounded-md`
                    }>
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

    const MainIcon = () => {
        return (
            < IconLink icon={< AiFillMail />} link='mailto:nymyatthuko@gmail.com' />
        )
    }

    return (
        <div className='min-h-screen text-center mt-4 flex flex-col justify-center '>
            <div className="mx-auto bg-gradient-to-b from-blue-400 rounded-full w-48 h-48 relative overflow-hidden md:h-96 md:w-96 mb-2 mt-12 no-highlight">
                <img src='/avatar.png' className='mx-auto' alt='avatar' />
            </div>
            <h1 className='text-3xl md:text-5xl font-semibold'>Myat Thu Ko (Tony)</h1>
            <h3 className='text-xl md:text-2xl'>iOS Developer</h3>
            <p className='text-md md:text-xl text-justify my-5'>
                As a senior at City College of New York studying Computer Science, I have developed a strong passion for iOS development and honed my skills in the field.
                In addition to my technical expertise, I am also a team-oriented individual with excellent social skills.
                My experience interning at M1 Finance as a Mobile Engineering Intern - iOS has allowed me to showcase my ability to work effectively in a team environment and contribute to the success of projects.
                In the future, I hope to continue growing my skills in iOS development and make a meaningful impact in the tech industry while also utilizing my strong team building abilities.
            </p>
            <div className='text-5xl py-4 flex justify-center gap-16'>
                <LinkedInIcon />
                <GitHubIcon />
                <MainIcon />
            </div>
        </div >
    )
}

export default Profile; 

import { GiFalconMoon, GiRabbit, GiSun } from 'react-icons/gi';
import { SiRabbitmq } from 'react-icons/si'

function Navbar(props) {
    return (
        <nav className={`${props.theme}-mode fixed top-0 left-0 w-full bg-white shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50 no-highlight`}>
            <div className="font-burtons inline-flex"> <GiRabbit size={32} className='mr-5' /> <SiRabbitmq size={30} /> </div>
            <ul className="flex items-center">
                <li onClick={props.toggleTheme}>
                    {props.theme === 'light' ? <GiSun size={32} /> : <GiFalconMoon size={32} />}
                </li>

                <a
                    className={`px-4 py-2 bg-${props.theme} hover:bg-gradient-to-r ${props.theme === 'light' ? 'from-rose-300 to-sky-300' : 'from-rose-600 to-sky-600'
                        } shadow-lg rounded-md ml-8`}
                    href="https://drive.google.com/file/d/1R-r_dFjWV8_59V4-sQUfrifEI4ggXEP2/view?usp=share_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume
                </a>

            </ul>
        </nav>
    )
}

export default Navbar; 
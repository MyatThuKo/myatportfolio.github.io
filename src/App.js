import './App.css';
import Navbar from './components/Navbar'
import Profile from './components/Profile';
// import Project from './components/Project';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`${theme}-mode bg-gray-800`}>
      <main className='px-8 md:px-20 lg:px-40'>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Profile theme={theme} />
        <Education theme={theme} />
        <Experiences theme={theme} />
        {/* <Project theme={theme} /> */}
        <Footer theme={theme} />
      </main>
    </div>
  );
}

export default App;

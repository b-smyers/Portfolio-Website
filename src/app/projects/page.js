import Projects from '../components/projects.js';
import '../common.css';

export default function Page() {
    return (
        <div className='window flex-column flex-center-v'>
            <h1 className='header padding-20'>Here&apos;s what I&apos;ve worked on</h1>
            <Projects/>
        </div>
    );
  }
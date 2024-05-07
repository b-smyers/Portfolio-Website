import Projects from '../components/projects.js';
import '../common.css';
import './page.css';

export default function Page() {
    return (
        <div className='window flex-column flex-center-v'>
            <h1 className='title padding-20'>Here&apos;s what I&apos;ve worked on</h1>
            <Projects/>
        </div>
    );
  }
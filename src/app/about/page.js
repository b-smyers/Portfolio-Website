import Socials from '../components/socials.js';
import '../common.css';
import './page.css';

export default function Page() {
    return (
        <div className='window display-flex flex-column flex-center-h flex-center-v'>
            <div className='display-flex flex-column flex-center-h flex-center-v soft-box'>
                <h1 className='title padding-20'>Get to know me</h1>
                <Socials/>
            </div>
        </div>
    );
  }
import './common.css';
import './page.css';

export default function Page() {
    return (
        <div className='window display-flex flex-column flex-center-v flex-center-h'>
            <h1 className='title padding-20'>Landing Page</h1>
            <div className='flex-10 display-flex flex-column flex-center-h flex-center-v'>
                <h1 className='Name'>Brendan Smyers</h1>
                <p>"Strive for the highest point in the sky"</p>
            </div>
        </div>
    );
}

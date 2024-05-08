import './common.css';
import './page.css';

export default function Page() {
    return (
        <div className='window flex-column flex-center-v flex-center-h'>
            <h1 className='title padding-20'>Landing Page</h1>
            <div className='flex-10 flex-column flex-center-h flex-center-v'>
                <h1 className='Name'>Brendan Smyers</h1>
                <p>&quot;If opportunity doesn&apos;t knock, build a door&quot; - Milton Berle</p>
            </div>
        </div>
    );
}

import { social_data } from '../data/social-data.js';
import './socials.css';

export default function Socials() {
    const social_entries = social_data.map(social =>
        <li key={social.id} className='Social-Entry'>
            <a href={social.link} target="_blank">
                <img src={social.src} alt={social.name} />
            </a>
        </li>
    );

    return (
        <>
            <ul className='center'>{social_entries}</ul>
        </>
    );
}
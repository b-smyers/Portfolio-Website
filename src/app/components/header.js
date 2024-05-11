import Link from "next/link";
import "./header.css";
import "../common.css";

export default function Header() {
    return (
        <header className="Header">
            <Link className="soft-box subtitle padding-10" href="/">Home</Link>
            <Link className="soft-box subtitle padding-10" href="/about">About</Link>
            <Link className="soft-box subtitle padding-10" href="/projects">Projects</Link>
        </header>
    );
}

import Link from "next/link";
import "./header.css";

export default function Header() {
    return (
        <header className="Header">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
        </header>
    );
}

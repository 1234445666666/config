import { headers } from "next/headers";
import page from './page.css'

export default function About() {
    return (
        <div className="header">
            <h1 className={page.title}>About</h1>
        </div>
    ); 
}
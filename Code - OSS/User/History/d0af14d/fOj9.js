import { headers } from "next/headers";
import '../page.css';

export default function About() {
    return (
        <div className="header">
            <h1 className="title" style={{ color: "red", textAlign: "center"}}>About</h1>
        </div>
    ); 
}
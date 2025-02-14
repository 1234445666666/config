import { headers } from "next/headers";

export async function generateMetadata() {
    return {
        title: "About",
    };

export default function About() {
    return (
        <div className="header">
            <h1 className="title">About</h1>
        </div>
    ); 
}
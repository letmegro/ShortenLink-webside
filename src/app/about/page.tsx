'use client'
import { useEffect } from "react";
export  default function About(){
    
    useEffect(() => {
        getMsg();
    }, []);
    return (<>
        <a href="/" className=" underline text-blue-500">Go Back</a>
        <h2 id="tempMsg" className=" font-bold">Loading...</h2>
    </>);
}

async function getMsg(){
    await fetch('/api/about', {method: 'GET'}).then(res => res.json()).then(data => 
        {
            const doc = document.getElementById('tempMsg') as HTMLHeadingElement;
            doc.innerText = JSON.stringify((data['message'])).replaceAll('"', '');
        });
    return "";
}
import React, { useEffect, useState } from 'react'

export default function Greeting() {
    const [welcomeMessage, setWelcomeMessage] = useState('')
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setWelcomeMessage('Good Morning!');
        } else if (hour < 18) {
            setWelcomeMessage('Good Afternoon!')
        } else {
            setWelcomeMessage('Good Evening!')
        }
    },[]);
    return (
        <section id='greeting' >
            <h1 className='text-gray-900 font-bold text-3xl lg:text-4xl'>{welcomeMessage} <br/>Welcome to <span className='text-slate-500'>Prominent</span> Lands</h1>
        </section>
    )
}

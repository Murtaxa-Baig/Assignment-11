import React from 'react'
import Navbar from '../navbar/navbar'

export default function Header(proops) {
    return (
        <>
            <section className="Sub-header">
                <Navbar />
                <h1>{proops.title}</h1>
            </section>


        </>
    )
}

import React from 'react'

export default function TextCard(proops) {
    return (
        <>
            <div className="course-col">
                <h3>{proops.title}</h3>
                <p>{proops.desc}</p>
            </div>

        </>
    )
}

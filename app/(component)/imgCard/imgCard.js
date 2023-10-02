import React from 'react'


export default function ImgCard(proops) {
    return (
        <>
            <div className="facilities-col">
                <img
                    src={proops.img}
                    width={400}
                    height={250}
                    alt="Picture of the author"
                />

                <h3>{proops.title}</h3>
                <p>{proops.description}</p>
            </div>

        </>
    )
}

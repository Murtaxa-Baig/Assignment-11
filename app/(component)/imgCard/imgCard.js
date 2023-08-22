import React from 'react'
import Image from 'next/image'

export default function ImgCard(proops) {
    return (
        <>
            <div className="facilities-col">
                <Image
                    src={proops.img}
                    width={400}
                    height={250}
                    alt="Picture of the author"
                />

                <h3>{proops.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>

        </>
    )
}

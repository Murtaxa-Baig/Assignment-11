import React from 'react'
export default function ImgTextCard(proops) {
  return (
    <>
    <div className="testimonials-col">
                <img
                    src={proops.img}
                    alt="Picture of the author"
                />

                <div>
                    <p>{proops.description}</p>
                    <h3>{proops.title}</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>

    </>
  )
}

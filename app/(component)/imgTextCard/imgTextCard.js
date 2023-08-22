import React from 'react'
import Image from 'next/image'
import img from "@/public/img/user.png"

export default function ImgTextCard() {
  return (
    <>
    <div className="testimonials-col">
                <Image
                    src={img}
                    alt="Picture of the author"
                />

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
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

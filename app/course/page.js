import React from 'react'
import Header from '../(component)/header/header'
import TextCard from '../(component)/textCard/textCard'
import ImgCard from '../(component)/imgCard/imgCard'
import img1 from "@/public/img/course1.png"
import img2 from "@/public/img/course2.png"
import img3 from "@/public/img/course3.png"

export default function page() {
    return (
        <>
            <Header title="Our Courses" />
            <section className="course">
                <h1>Course We Offer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                <div className="row">
                    <TextCard title="Undergraduate Programs" />
                    <TextCard title="Graduate Programs" />
                    <TextCard title="Adult Learning & Degree Completion" />
                </div>
                <section className="facilities">
                    <h1>Best Courses</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    <div className="row">
                        <ImgCard title="Web Development" img={img1}/>
                        <ImgCard title="Artificial Intelligence" img={img2}/>
                        <ImgCard title="Data Science" img={img3}/>
                    </div>
                </section>

            </section>

        </>
    )
}

import React from 'react'
import Header from '../(component)/header/header'
import Button from '../(component)/button/button'
import Link from 'next/link'
import Image from 'next/image'
import img from "@/public/img/about.png"
export default function page() {
  return (
    <>
      <Header title="ABOUT US" />
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the worlds largest University</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
            <Link href='/about'><Button title="EXPLORE NOW" CN="hero_btn btn" /></Link>
          </div>
          <div className="about-col">
            <Image
              className='blogImg'
              src={img}
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>


    </>
  )
}

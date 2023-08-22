import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './(component)/navbar/navbar'
import Button from './(component)/button/button'
import TextCard from './(component)/textCard/textCard'
import ImCard from './(component)/imgCard/imgCard'
import ImgCard from './(component)/imgCard/imgCard'
import ImgTextCard from './(component)/imgTextCard/imgTextCard'
import Link from 'next/link'
import ImgCard1 from "@/public/img/libary.png"
import ImgCard2 from "@/public/img/playground.png"
import ImgCard3 from "@/public/img/food.png"
import Homeimg1 from "@/public/img/Campus1.png"
import Homeimg2 from "@/public/img/Campus2.png"
import Homeimg3 from "@/public/img/Campus3.png"

export default function Home() {
 
  return (
    <>
      <section className="header">
        <Navbar />

        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Button title="Visit Us To Know More" CN="hero_btn"/>
        </div>
      </section>
      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
      </section>
      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="campus-col">
            <Image
                    src={Homeimg1}
                    width={400}
                    height={250}
                    alt="Picture of the author"
                />
            <div className="layer">
              <h3>FAISALABAD</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image
                    src={Homeimg2}
                    width={400}
                    height={250}
                    alt="Picture of the author"
                />
            <div className="layer">
              <h3>LAHORE</h3>
            </div>
          </div>
          <div className="campus-col">
            <Image
                    src={Homeimg3}
                    width={400}
                    height={250}
                    alt="Picture of the author"
                />
            <div className="layer">
              <h3>ISLAMABAD</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImgCard title="Best Libary" img={ImgCard1} />
          <ImgCard title="Athletics" img={ImgCard2} />
          <ImgCard title="Tasty and Healthy Food" img={ImgCard3}/>
        </div>
      </section>

      <section className="testimonials">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImgTextCard />
          <ImgTextCard />
        </div>
      </section>

      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact"><Button title="Contact US" CN="hero_btn"/></Link>
      </section>



    </>
  )
}

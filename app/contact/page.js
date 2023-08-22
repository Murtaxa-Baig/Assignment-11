import React from 'react'
import Header from '../(component)/header/header'
import Button from '../(component)/button/button'

export default function page() {
  return (
    <>
    <Header title="Contact Us" />
    <section className="loacation">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046507816!2d72.92448895548043!3d31.42375904045649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692625824622!5m2!1sen!2s"
            width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
    </section>
    <section className="contact-us">
        <div className="row">
            <div className="content-col">
                <div>
                    <i className="fa fa-home"></i>
                    <span>
                        <h5>NH9 Road, ABC Building</h5>
                        <p>Faisalabad, Punjab, Pakistan</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <span>
                        <h5>+92 3411840327</h5>
                        <p>Monday To Saturday, 9AM To 6PM</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <span>
                        <h5>darvaish49@gmail.com</h5>
                        <p>Email Us Yor Query</p>
                    </span>
                </div>
            </div>
            <div className="content-col">
                <form>
                    <input type="text" placeholder="Enter Name" required />
                    <input type="email" placeholder="Enter Email" required />
                    <input type="text" placeholder="Enter Subject" required />
                    <textarea rows="8" placeholder="Message" required></textarea>
                    <Button title="Send Message" CN="hero_btn btn" type="submit"/>
                </form>
            </div>
        </div>
    </section>

   

    </>
  )
}

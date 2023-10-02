
const fetchCourse = async () => {
  try {
    let response = await client.getEntries({ content_type: "courses" })

    const courses = response?.items?.map((item) => {
      return {
        title: item?.fields?.courseName,
        desc: item?.fields?.description
      }
    })
    return courses

  }
  catch (error) {
    console.log("Error at fetching Course card", error);
  }
}

const fetchImg = async () => {
  try {
    let response = await client.getEntries({ content_type: "tour" })
    const images = response?.items?.map((items) => {
      // console.log(items.fields.img.fields.file.url)
      return {
        img: items.fields.img.fields.file.url
      }
    })
    return images
  }
  catch (error) {
    console.log("Error at fetching Images", error)
  }
}
const fetchFacilities = async () => {
  // console.log('request going for facilities')
  try {
    let response = await client.getEntries({ content_type: "facilities" })
    // console.log("Respone for fetch Facilities", response)
    const bestCourses = response?.items?.map((items) => {
      // console.log("COnsole for title", response.items.fields.title);
      return {
        title: items?.fields?.title,
        desc: items?.fields?.description,
        img: items?.fields.img.fields.file.url
      }
    })
    return bestCourses
  }
  catch (error) {
    console.log("Error at fetching Facilities card", error)
  }
}
const fetchStudentReview = async () => {
  // console.log('request going for facilities')
  try {
    let response = await client.getEntries({ content_type: "studentReview" })
    // console.log("Respone for fetch Facilities", response)
    const bestCourses = response?.items?.map((items) => {
      // console.log("COnsole for title", response.items.fields.title);
      return {
        title: items?.fields?.title,
        desc: items?.fields?.description,
        img: items?.fields.img.fields.file.url
      }
    })
    return bestCourses
  }
  catch (error) {
    console.log("Error at fetching Facilities card", error)
  }
}



import Image from 'next/image'
import Navbar from './(component)/navbar/navbar'
import Button from './(component)/button/button'
import TextCard from './(component)/textCard/textCard'
import ImgCard from './(component)/imgCard/imgCard'
import ImgTextCard from './(component)/imgTextCard/imgTextCard'
import Link from 'next/link'
import client from '@/lib/contentful'

export default async function Home() {
  const course = await fetchCourse();
  const image = await fetchImg();
  const facilitie = await fetchFacilities()
  const StudentReview = await fetchStudentReview()
  // const bestcourse = await fetchbestCourses();
  // console.log(bestcourse)


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
          <Button title="Visit Us To Know More" CN="hero_btn" />
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
          {
            course.map((items) => {
              return (
                <TextCard title={items.title} desc={items.desc} />
              )
            })
          }
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
          {
            image.map((items) => {
              return (
                <>
                  <div className="campus-col">
                    <img
                      src={`https:${items.img}`}
                      width={400}
                      height={250}
                      alt="Picture of the author"
                    />
                    <div className="layer">
                      <h3>FAISALABAD</h3>
                    </div>
                  </div>
                </>
              )
            })
          }
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
          {
            facilitie.map((item) => {
              return (
                <>
                  <ImgCard title={item.title} description={item.desc} img={`https:${item.img}`} />
                </>
              )
            })
          }
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
          {
            StudentReview.map((item) => {
              return (
                <>
                  <ImgTextCard title={item.title} description={item.desc} img={`https:${item.img}`}  />
                  {/* <ImgTextCard /> */}
                </>
              )
            })
          }
        </div>
      </section>

      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Link href="/contact"><Button title="Contact US" CN="hero_btn" /></Link>
      </section>



    </>
  )
}

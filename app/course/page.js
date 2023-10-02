import React from 'react'
import Header from '../(component)/header/header'
import TextCard from '../(component)/textCard/textCard'
import ImgCard from '../(component)/imgCard/imgCard'
import client from '@/lib/contentful'
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

const fetchbestCourses = async () => {
    // console.log('request going')
    let response = await client.getEntries({ content_type: "bestCourseCard" })
    // console.log("Respone for fetch best card", response.items)
    const bestCourses = response?.items?.map((items) => {
        return {
            title: items?.fields?.title,
            desc: items?.fields?.description,
            img: items?.fields.img.fields.file.url
        }
    })
    return bestCourses
}
export default async function page() {
    const course = await fetchCourse();
    const BestCourse = await fetchbestCourses();
    console.log("BestCourse array", BestCourse)
    return (
        <>
            <Header title="Our Courses" />
            <section className="course">
                <h1>Course We Offer</h1>
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
                <section className="facilities">
                    <h1>Best Courses</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    <div className="row">
                        {
                            BestCourse.map((item) => {
                                return (
                                    <>
                                        <ImgCard title={item.title} description={item.desc} img={`https:${item.img}`} />
                                    </>
                                )
                            })
                        }
                    </div>
                </section>

            </section>

        </>
    )
}

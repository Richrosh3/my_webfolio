"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
    const { ref } = useSectionInView("Experience", .5);

    return (
        <section
            id="experience"
            ref={ref}
            className='scroll-mt-28 mb-28 sm:mb-40'
        >
            <SectionHeading> Experience</SectionHeading>
            <VerticalTimeline lineColor="rgb(255 241 242 / 1)">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={true}
                            contentStyle={{
                                background: "rgb(239 246 255 / 1)",
                                boxShadow: "none",
                                border: "1px solid rgb(186 230 253 / 1)",
                                textAlign: "left",
                                padding: "1.3rem 3rem",
                                marginLeft: index % 2 === 0 ? "10px" : "0",
                                marginRight: index % 2 !== 0 ? "10px" : "0"
                            }}
                            contentArrowStyle={{
                                borderRight: ".4rem solid rgb(186 230 253 / 1)"
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "rgb(186 230 253 / 1)",
                                fontSize: "1.5rem",
                                border: "1px solid rgb(186 230 253 / 1)"
                            }}


                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>

                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
                }
            </VerticalTimeline>
        </section>
    );
}

"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';


export default function Experience() {
    const { ref, inView } = useSectionInView("Experience", .3);
    const { theme } = useTheme();

    return (
        <section
            id="experience"
            ref={ref}
            className='scroll-mt-28 mb-28 sm:mb-40'
        >
            <SectionHeading> Experience</SectionHeading>
            <VerticalTimeline lineColor= "">
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible={inView}
                            contentStyle={{
                                background: theme === 'light' ? "rgb(239 246 255 / 1)" : "rgba(255,255,255,.05)",
                                boxShadow: "none",
                                border: theme === 'light' ? "1px solid rgb(186 230 253 / 1)" : "1px solid #93c5fd",
                                textAlign: "left",
                                padding: "1.3rem 3rem",
                            }}
                            contentArrowStyle={{
                                borderRight: theme === 'light' ? ".4rem solid rgb(186 230 253 / 1) " : ".4rem solid #93c5fd"
                            }}
                            date={item.date}
                            dateClassName={index % 2 === 0 ? "with-margin-left" : "with-margin-right"}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === 'light' ? "rgb(186 230 253 / 1)" : "#93c5fd",
                                fontSize: "1.5rem",
                                border: theme === 'light' ? "1px solid rgb(186 230 253 / 1)" : "1px solid #93c5fd"
                            }}


                        >
                            <h3 className="!font-semibold capitalize">{item.title}</h3>
                            <p className="!font-light italic !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>

                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
                }
            </VerticalTimeline>
        </section>
    );
}

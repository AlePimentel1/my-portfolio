import React from 'react';
import { TimelineItem } from './TimeLineItem';

interface TimelineExperience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
}

interface TimelineProps {
    experiences: TimelineExperience[];
}

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
    return (
        <section className="py-24" id="experience">
            <div className="flex flex-col gap-6 px-4 mx-auto justify-center items-center">
                <h2 className="text-2xl md:text-3xl xl:text-4xl text-center font-bold font-heading font-heading tracking-px-n leading-none text-white">Experience</h2>
                <p className="text-md text-pretty text-center font-medium leading-normal md:max-w-lg mx-auto text-white">My professional journey so far.</p>
                <div className="relative max-w-[80%]">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-green-800" />
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <TimelineItem
                                key={index}
                                {...experience}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
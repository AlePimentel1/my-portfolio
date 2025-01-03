import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    isLeft: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    company,
    location,
    period,
    description,
    isLeft,
}) => {
    const containerClasses = isLeft
        ? "ml-0 mr-[50%] pr-8"
        : "ml-[50%] pl-8";

    const dotPosition = isLeft
        ? "right-0 translate-x-1/2"
        : "left-0 -translate-x-1/2";

    return (
        <div className={`relative pb-12 last:pb-0 ${containerClasses}`}>
            <div className={`absolute top-2 ${dotPosition} z-10 h-4 w-4 rounded-full border-2 border-green-800 bg-black`} />
            <div className="group bg-black border-2 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow [box-shadow:rgb(20,83,45)12px_12px] hover:[box-shadow:rgb(20,83,45)0px_0px] duration-300">
                <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <Briefcase size={16} className="text-green-600" />
                            <span className='text-gray-400'>{company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={16} className="text-green-600" />
                            <span className='text-gray-400'>{location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} className="text-green-600" />
                            <span className='text-gray-400'>{period}</span>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-300 font-medium mt-4">{description}</p>
            </div>
        </div>
    );
};
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import React, { useEffect } from 'react';

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
    const [isMobile, setIsMobile] = React.useState(false);

    const containerClasses = isMobile ? "mx-auto" : isLeft
        ? "ml-0 mr-[50%] pr-8"
        : "ml-[50%] pl-8";

    const dotPosition = isLeft
        ? "right-0 translate-x-1/2"
        : "left-0 -translate-x-1/2";

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className={`relative pb-12 last:pb-0 ${containerClasses}`}>
            <div className={`absolute top-2 ${dotPosition} z-2 h-4 w-4 rounded-full border-2 border-orange-800 bg-black hidden md:inline`} />
            <div className={`group bg-black/30 backdrop-blur-3xl border-2 rounded-lg p-6 hover:scale-105 ${isLeft ? 'hover:border-[#198ba4aa] hover:shadow-xl hover:shadow-[#198ba4aa] hover:bg-black/50' : 'hover:border-[#962a72aa] hover:shadow-xl hover:shadow-[#962a72aa] hover:bg-black/50'} transition duration-150`}>
                <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-bold text-orange-500">{title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                            <Briefcase size={16} />
                            <span>{company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{period}</span>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-300 font-medium mt-4">{description}</p>
            </div>
        </div >
    );
};
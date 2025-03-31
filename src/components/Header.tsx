import React, { useEffect } from 'react';

interface Props {
    sections: {
        id: string;
        title: string;
    }[];
}

const Header: React.FC<Props> = ({ sections }) => {
    const [currentHash, setCurrentHash] = React.useState('');

    useEffect(() => {
        const handleScroll = () => {
            const { hash } = window.location;
            setCurrentHash(hash);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [window.location]);

    return (
        <header className="fixed top-6 left-0 right-0 flex items-center justify-center px-8 z-10">
            <nav className="flex justify-center px-8 py-2 outline outline-gray-50 bg-transparent backdrop-blur-3xl rounded-lg z-10">
                <ul className="flex gap-5 text-white">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                className={"hover:text-orange-500 uppercase text-[13px] transition-transform duration-300" + (currentHash === `#${section.id}` ? ' text-orange-500 font-medium' : '')}
                                href={`#${section.id}`}
                            >
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';

interface Props {
    sections: {
        id: string;
        title: string;
    }[];
}

const Header: React.FC<Props> = ({ sections }) => {
    const currentHash = window.location.hash;
    return (
        <header className="fixed top-6 left-0 right-0 flex items-center justify-center px-8 z-10">
            {/* Centered Navigation */}
            <nav className="flex justify-center px-5 py-2 outline outline-slate-50 bg-transparent backdrop-blur-3xl rounded-full z-10 hover:scale-110 transition-transform duration-300 hover:outline hover:outline-green-600 hover:shadow-md hover:shadow-green-400">
                <ul className="flex gap-5 text-white">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                className="hover:text-green-500 uppercase text-[13px] transition-transform duration-300"
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

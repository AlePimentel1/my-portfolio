import { projects } from "../constants"

const CurrentProjects = () => {
    return (
        <section className="py-24" id="projects">
            <div className="flex flex-col gap-6 px-4 mx-auto">
                <h2 className="text-6xl md:text-8xl xl:text-4xl text-center font-bold font-heading font-heading tracking-px-n leading-none text-white">Current Projects</h2>
                <p className="text-md text-pretty text-center font-medium leading-normal md:max-w-lg mx-auto text-white">Real projects that are currently in progress or active.</p>
                <div className="mx-auto flex items-center justify-center">
                    <div className="flex-wrap grid grid-cols-3 max-w-[80%]">
                        {projects.map((project, index) => (
                            <div className="w-full col-span-1 flex" key={index}>
                                <div className="p-2 h-full flex flex-col items-center gap-2 max-w-[80%] bg-black/90 border-2 rounded-xl [box-shadow:rgb(20,83,45)12px_12px] hover:[box-shadow:rgb(20,83,45)0px_0px] transition-all duration-300">
                                    <img className="object-contain w-auto h-48 rounded-xl" src={project.image} alt={project.title} />
                                    <div className="flex flex-col gap-2 justify-between h-full">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-lg font-medium font-heading leading-snug text-green-600">{project.title}</h3>
                                            <p className="text-sm text-gray-300 font-medium">
                                                {project.description}
                                            </p>
                                            <a href={project.href} target="_blank" rel="noreferrer">
                                                <button className="flex items-center justify-center w-full py-2 text-sm font-medium text-white bg-green-800 rounded-md">
                                                    View Project
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurrentProjects
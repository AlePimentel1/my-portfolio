import { projects } from "../constants"

const CurrentProjects = () => {
    return (
        <section className="py-24" id="projects">
            <div className="flex flex-col gap-6 px-4 mx-auto">
                <h2 className="text-2xl md:text-3xl xl:text-4xl text-center font-bold font-heading font-heading tracking-px-n leading-none text-orange-500">Current Projects</h2>
                <p className="text-md text-pretty text-center font-medium leading-normal md:max-w-lg mx-auto text-white">Real projects that are currently in progress or active.</p>
                <div className="mx-auto flex items-center justify-center">
                    <div className="flex-wrap grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[80%]">
                        {projects.map((project, index) => (
                            <div className="w-full col-span-1 flex items-center justify-center" key={index}>
                                <div className="p-2 h-full flex flex-col items-center gap-2 max-w-[80%] bg-black/30 border rounded-xl hover:border-orange-500 hover:bg-black/50 transition duration-150">
                                    <img className="object-cover w-full h-48 rounded-xl" src={project.image} alt={project.title} />
                                    <div className="flex flex-col gap-2 justify-between h-full">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-lg font-medium font-heading leading-snug text-orange-600">{project.title}</h3>
                                            <p className="text-sm text-gray-300 font-medium">
                                                {project.description}
                                            </p>
                                            <a href={project.href} target="_blank" rel="noreferrer">
                                                <button className="flex items-center justify-center w-full py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-800">
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
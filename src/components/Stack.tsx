import { stack } from "../constants"

const Stack = () => {
    return (
        <section className="py-36" id="stack">
            <div className="flex flex-col gap-6 px-4 mx-auto">
                <h2 className="text-2xl md:text-3xl xl:text-4xl text-center font-bold font-heading font-heading tracking-px-n leading-none text-orange-500">Stack</h2>
                <div className="flex flex-wrap gap-6 max-w-[70%] lg:max-w-[50%] items-center justify-center mx-auto">
                    {stack.map((tech, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center justify-center p-4 rounded-2xl shadow-md transition-all duration-300 group border border-transparent tooltip`}
                            style={{
                                backgroundColor: `${tech.bgColor}50`,
                            }}
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-10 h10 object-contain aspect-square"
                            />

                            <div
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                    borderColor: 'transparent',
                                    borderWidth: '2px',
                                }}
                            />
                            <div
                                className="absolute inset-0 rounded-2xl border opacity-0 transition-all duration-300 group-hover:opacity-100"
                                style={{
                                    borderColor: tech.bgColor,
                                }}
                            />
                            <span className="tooltiptext mb-1 text-sm" style={{
                                background: `${tech.bgColor}50`
                            }}>
                                {tech.name}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Stack
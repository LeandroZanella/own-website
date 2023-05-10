import { frameworks } from "../frameworks";

export default function Frameworks(){
    return(
        <div className="flex justify-center items-center py-8 w-full bg-gray-950">
            <div className="w-full max-w-screen-lg">
                <h1 className="text-4xl font-bold text-white text-center mb-10">Conhecimento em frameworks</h1>
                <div className="flex flex-wrap justify-center">
                    {frameworks.map((skill, index) => (
                    <div key={index} className="w-64 mx-5 my-5 p-4 bg-white rounded-lg shadow-lg text-center">
                        <img src={skill.icon} alt={skill.title} className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                        <p className="text-gray-700">{skill.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
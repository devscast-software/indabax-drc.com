import event, { type Person } from "../data/event";

type SpeakerCardProps = {
    speaker: Person
}

function SpeakerCard({speaker}: SpeakerCardProps) {
    return (
        <div className="group relative space-y-6 hover:-transparent overflow-hidden">
            <a href={speaker.link} target="_blank" title={speaker.name + ' - ' + speaker.organization}>
                <img
                    className="mx-auto h-[16rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={speaker.image}
                    alt={`Speaker ${speaker.name}`}
                    loading="lazy"
                    width="640"
                    height="805"
                />
            </a>
            <div className="absolute left-0 -top-6 h-16 w-16 flex bg-white text-white">
                <span className="w-7 h-auto m-auto">                    
                    <img src={`https://flagcdn.com/32x24/${speaker.country}.png`} loading="lazy" width="32" height="24" alt={speaker.country} aria-label={speaker.country}></img>
                </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-6 py-4 bg-gray-800 opacity-60 group-hover:opacity-80 transition duration-300 ease-in-out">
                <div>
                    <h4 className="text-sm font-semibold text-white">{speaker.name}</h4>
                    <span className="block text-sm text-white">{speaker.organization}</span>
                </div>
            </div>
        </div>
    );
}

function SpeakerBackground() {
    return (
        <div aria-hidden="true" className="absolute top-56 inset-x-32 inset-0 grid grid-cols-2 opacity-60">
            <div className="blur-[106px] h-72 bg-gradient-to-br from-primary to-purple-400"></div>
            <div className="blur-[106px] h-56 bg-gradient-to-r from-indigo-400 to-blue-700"></div>
        </div>
    );
}

export default function Speakers() {
    return (
        <section id="orateurs" className="pt-28 relative z-10">
            <div className="relative">
                <SpeakerBackground />
                <div className="relative max-w-6xl mx-auto px-8 md:px-12 lg:px-6">
                    <div className="mb-16 mx-auto text-center md:w-2/3 lg:w-1/2">
                        <h2 className="mb-8 text-4xl font-bold text-white md:text-4xl lg:text-6xl">
                            Les orateurs
                        </h2>

                        {event.speakers.length == 0 && <p className="text-white text-lg">Les orateurs seront annoncés ultérieurement</p>}
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {event.speakers.map((speaker: Person) => (<SpeakerCard speaker={speaker} />))}
                    </div>
                </div>
            </div>
        </section>
    );
}

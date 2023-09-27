import event, { type Person } from "../data/event";

export default function Orgnizers() {
    return (
        <section id="organisateurs" className="my-48 relative z-10">
            <div className="relative">
                <div className="m-auto text-center lg:w-7/12">
                    <h2 className="mb-16 text-4xl font-bold text-white md:text-4xl lg:text-6xl">
                        Commité d'organisation
                    </h2>
                </div>
                <div className="relative max-w-6xl mx-auto px-10 md:px-12 lg:px-12">
                    <div className="grid gap-10 md:grid-cols-6 sm:grid-cols-2 lg:grid-cols-6">
                        {event.orgnizers.map((organizer: Person) => (
                            <div className="space-y-4 text-center">
                                <a href={organizer.link} target="_blank" title={organizer.name + ' - ' + organizer.organization ?? organizer.role}>
                                    <img className="w-32 h-32 mx-auto object-cover rounded-full md:w-20 md:h-20 lg:w-32 lg:h-32" src={organizer.image} alt="profile" loading="lazy" width="640" height="805" />
                                </a>
                                <div>
                                    <h4 className="text-xl">{organizer.name}</h4>
                                    <span className="block text-sm text-gray-400">{organizer.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>	
    )
}

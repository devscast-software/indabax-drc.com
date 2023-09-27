import event from '../data/event'

export default function Pricing() {
    return (
        <section className="pt-16 relative z-10">
            <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
                <div className="m-auto text-center lg:w-7/12">
                    <h2 className="mb-8 text-4xl font-bold text-white md:text-4xl lg:text-6xl">Tout le monde est invité</h2>
                    <p className="text-gray-300 text-lg">
                        L'objectif de la conférence est de fournir une introduction pratique à l'apprentissage automatique pour les débutants,
                        d'échanger des connaissances scientifiques entre chercheurs et de présenter des applications de pointe de partenaires industriels.
                    </p>
                </div>
                <div className="mt-12 grid items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative bg-neutral-900">
                        <div className="relative p-8">
                            <img className="w-20 mx-auto" src="https://indabax.co.za/images/icons/icon-1.png" alt="student pricing" />
                            <div className="mt-12 space-y-6 mb-20">
                                <h3 className="text-2xl text-white font-semibold text-center">Étudiants</h3>
                                <div className="relative flex justify-around">
                                    <div className="flex">
                                        <span className="-ml-2 mt-1 text-xl text-secondary font-bold">$</span>
                                        <span className="text-6xl text-white font-bold leading-0">{event.pricing.student}</span>
                                    </div>
                                </div>
                            </div>
                            <a href={event.registrationGoogleFormLink} className="relative group flex h-12 w-full items-center justify-center px-6 overflow-hidden border border-gray-500 hover:border-transparent before:absolute before:inset-0 before:scale-x-0 before:origin-right before:bg-primary before:hover:origin-left before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                <span className="relative text-base font-semibold text-white delay-100">S'enregistrer</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative bg-neutral-800 scale-105">
                        <div className="relative p-8">
                            <img className="w-16 mx-auto" src="https://indabax.co.za/images/icons/icon-3.png" alt="academic pricing" />
                            <div className="mt-12 space-y-6 mb-20">
                                <h3 className="text-2xl text-white font-semibold text-center">Académiques</h3>
                                <div className="relative flex justify-around">
                                    <div className="flex">
                                        <span className="-ml-2 mt-1 text-xl text-secondary font-bold">$</span>
                                        <span className="text-6xl text-white font-bold leading-0">{event.pricing.academic}</span>
                                    </div>
                                </div>
                            </div>
                            <a href={event.registrationGoogleFormLink} className="relative group flex h-12 w-full items-center justify-center px-6 bg-white overflow-hidden before:absolute before:inset-0 before:scale-x-0 before:origin-right before:bg-primary before:hover:origin-left before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                <span className="relative text-base font-semibold text-dark group-hover:text-white delay-100">S'enregistrer</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative bg-neutral-900">
                        <div className="relative p-8">
                            <img className="w-20 mx-auto" src="https://indabax.co.za/images/icons/icon-2.png" alt="professional pricing" />
                            <div className="mt-12 space-y-6 mb-20">
                                <h3 className="text-2xl text-white font-semibold text-center">Professionnels</h3>
                                <div className="relative flex justify-around">
                                    <div className="flex">
                                        <span className="-ml-2 mt-1 text-xl text-secondary font-bold">$</span>
                                        <span className="text-6xl text-white font-bold leading-0">{event.pricing.professional}</span>
                                    </div>
                                </div>
                            </div>
                            <a href={event.registrationGoogleFormLink} className="relative group flex h-12 w-full items-center justify-center px-6 bg-white overflow-hidden before:absolute before:inset-0 before:scale-x-0 before:origin-right before:bg-primary before:hover:origin-left before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                <span className="relative text-base font-semibold text-dark group-hover:text-white delay-100">s'enregistrer</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import event from '../data/event'

type PricingOptionPriceProps = {
    price: number
}

type PricingOptionProps = {
    title: string,
    price: number,
    icon: string
}

function PricingOptionPrice({price}: PricingOptionPriceProps) {
    return (
        <div className="relative flex justify-around">
            <div className="flex">
                <span className="-ml-2 mt-1 text-xl text-secondary font-bold">$</span>
                <span className="text-6xl text-white font-bold leading-0">{price}</span>
            </div>
        </div>
    );
}

function PricingOption({title, price, icon}: PricingOptionProps) {
    return (
        <div className="relative p-8">
            <img className="w-12 mx-auto" src={icon} alt="student pricing" />
            <div className="mt-12 space-y-6 mb-20">
                <h3 className="text-2xl text-white font-semibold text-center">{title}</h3>
                <PricingOptionPrice price={price} />
            </div>
            <a href={event.registrationGoogleFormLink} className="relative group flex h-12 w-full items-center justify-center px-6 bg-white overflow-hidden before:absolute before:inset-0 before:scale-x-0 before:origin-right before:bg-red-600 before:hover:origin-left before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span className="relative text-base font-semibold text-dark group-hover:text-white">S'enregistrer</span>
            </a>
        </div>
    );
}

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
                        <PricingOption price={event.pricing.student} title="Étudiants" icon='/images/icons/student.png' />
                    </div>
                    <div className="relative bg-neutral-800 scale-105">
                        <PricingOption price={event.pricing.academic} title="Académiques" icon='/images/icons/graduating-student.png' />
                    </div>
                    <div className="relative bg-neutral-900">
                        <PricingOption price={event.pricing.professional} title='Professionnels' icon='/images/icons/businessman.png' />
                    </div>
                </div>
            </div>
        </section>
    );
}

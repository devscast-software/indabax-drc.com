import event, { type Sponsor } from '../data/event'
import Sponsors from './Sponsors';

export default function Hero() {
    return (
        <section className="relative pt-28 overflow-hidden bg-black before:absolute before:inset-0 before:z-[8] before:h-2/3 before:mt-auto before:bg-gradient-to-t before:from-black">
            <img className="absolute inset-0 w-full object-cover object-bottom blur-lg h-full" src="/images/cover.webp" alt="cover" />
            <div className="h-full relative z-[8]">
                <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-6">
                    <div className="pt-40 lg:pt-28">
                        <h1 className="text-5xl font-bold text-center font-['AbrilFatface'] text-white sm:text-6xl lg:text-7xl">Deep Learning<br/> Indaba𝕏 DR Congo</h1>
                    </div>
                    <div className="mt-12">
                        <div className="flex justify-center items-center gap-4 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <span className="text-xl">{event.eventStartsAt} - {event.eventEndsAt}</span>
                        </div>

                        <div className="mt-4 flex justify-center items-center gap-4 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xl">{event.location}</span>
                        </div>

                        <div className="mt-12 flex flex-wrap justify-center gap-6">
                            <a href={event.registrationGoogleFormLink} className="relative h-16 px-8 group flex sm:h-20 w-full items-center justify-center sm:px-12 bg-white overflow-hidden before:absolute before:inset-0 before:scale-x-0 before:origin-right before:bg-primary before:hover:origin-left before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span className="relative text-2xl font-semibold text-dark group-hover:text-white">S'enregistrer</span>
                            </a>
                            <a href={event.programGoogleDocsLink} className="relative h-16 px-8 group flex sm:h-20 w-full items-center justify-center sm:px-12 border-2 border-gray-400 overflow-hidden before:absolute before:inset-0 before:scale-x-0 before:origin-right before:bg-white before:hover:origin-left before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span className="relative text-2xl font-semibold text-white group-hover:text-dark">Programme</span>
                            </a>
                        </div>
                    </div>

                    <Sponsors />
                </div>
            </div>
        </section>
    );
}

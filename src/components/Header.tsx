import event from "../data/event";

export default function Header() {
    const links = [
        {link: '/', label: 'Acceuil'},
        {link: '/#sponsors', label: 'Sponsors'},
        {link: '/#orateurs', label: 'Orateurs'},
        {link: '/#organisateurs', label: 'Organisateurs'},
        {link: '/archives', label: 'Archives'},
        {link: 'mailto:indabaxdrc2022@gmail.com', label: 'Contact'}
    ]

    return (
        <header className="bg-white fixed z-50 inset-x-0">
            <div className="absolute z-10 inset-x-0 top-0 h-16 lg:h-[4.8rem] bg-gradient-to-b from-black backdrop-blur"></div>
            <nav className="absolute z-20 w-full">
                <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-6">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0 md:py-4">
                        <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
                        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                            <a href="/" aria-label="logo" className="flex items-center space-x-2">
                                <div aria-hidden="true" className="flex space-x-1">
                                    <img src="/images/logo-white.png" className="h-12" alt="logo" />
                                </div>
                                <span className="text-2xl font-bold text-white">Indaba𝕏 DRC</span>
                            </a>
                            <div className="relative flex max-h-10 items-center lg:hidden">
                                <label id="hamburger" role="button" htmlFor="toggle_nav" aria-label="humburger" className="relative -mr-6 p-6">
                                    <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-slate-600 transition duration-300"></div>
                                    <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-slate-600 transition duration-300"></div>
                                </label>
                            </div>
                        </div>
                        <label aria-hidden="true" htmlFor="toggle_nav" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-slate-800/70 backdrop-blur-2xl transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden"></label>
                        <div className="invisible absolute top-full left-0 z-20 w-full origin-top translate-y-1 scale-95 flex-col flex-wrap justify-end gap-6 border bg-black/80 p-8 opacity-0 transition-all duration-300 peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100 border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0">
                            <div className="w-full text-white lg:w-auto lg:pr-4 lg:pt-0">
                                <ul className="flex flex-col gap-6 font-medium tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                                    {links.map(link => (
                                        <li>
                                            <a href={link.link} title={link.link} aria-label={link.link} className="block transition hover:text-primary md:px-4">
                                                <span>{link.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-12 lg:mt-0">
                                <a href={event.registrationGoogleFormLink} target="_blank" className="relative group flex h-12 w-full items-center justify-center px-6 bg-white overflow-hidden before:absolute before:inset-0 before:scale-x-0 before:origin-right before:bg-red-600 before:hover:origin-left before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                    <span className="relative text-base font-semibold text-dark group-hover:text-white">S'enregistrer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

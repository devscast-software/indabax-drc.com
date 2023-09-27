export type Person = {
    name: string,
    role: string,
    organization: string,
    image: string,
    link: string,
    country: string
}

export type Sponsor = {
    name: string,
    link: string,
    image: string,
    category?: string
}

export type IndabaEvent = {
    id: number,
    name: string,
    description: string,
    location: string,
    registrationGoogleFormLink: string,
    programGoogleDocsLink: string,
    eventStartsAt: string,
    eventEndsAt: string,
    pricing: {
        student: number,
        academic: number,
        professional: number
    },
    sponsors: Sponsor[],
    orgnizers: Person[],
    speakers: Person[]
}

export default {
    id: 3,
    name: 'Indabax 2023 - Université Nouveaux Horizons', 
    description: "L'Intelligence artificielle: enjeux, opportunités et facteurs humains",
    location: "Université Nouveaux Hozirons, Lubumbashi, Haut-Katanga R.D. Congo",
    registrationGoogleFormLink: '',
    programGoogleDocsLink: '',
    eventEndsAt: 'Jun 17 2023',
    eventStartsAt: 'Jun 15 2023',
    pricing: {
        student: 20,
        academic: 35,
        professional: 50
    },
    sponsors: [
        {name: 'Zindi', image: '/sponsors/632f1784dc7d6263823796.png', link: 'https://zindi.africa', category: 'platinum'},
        {name: 'Deep learning indaba', image: '/sponsors/632f18aed2506398507585.svg', link: 'https://deeplearningindaba.com', category: 'platinum'},
        {name: 'Université Nouveaux Horizons', image: 'public/sponsors/63f4eec820e66159906472.png', link: 'https://unhorizons.com', category: 'platinum'},
        {name: 'NeoTex', image: '/sponsors/6482e84df37ea368335328.png', link: 'https://neotex.com', category: 'platinum'},
        {name: 'Mozilla', image: '/sponsors/6482eae52c18e726856962.png', link: 'https://mozilla.org', category: 'platinum'},
    ],
    orgnizers: [
        {name: 'Nicanor Mayumu', role: 'Director, IndabaX DRC', organization: 'Mapon University', image: '/organizers/632f2b56cec9e786115539.jpeg', link: 'https://www.linkedin.com/in/nicanor-mayumu-500366141/', country: 'cd'},
        {name: 'Saint-jean Djungu', role: 'Supervisor', organization: 'Université Nouveaux Horizons', image: '/organizers/6435b4431982d148698159.jpeg', link: 'https://scholar.google.be/citations?user=ljQWHb8AAAAJ&hl=fr', country: 'cd'},
        {name: 'Godwill Ilunga', role: 'Director, Local Organizer', organization: 'Université Nouveaux Horizons', image: '/organizers/643561c40bf5a049771911.jpeg', link: 'hhttps://www.linkedin.com/in/godwill-ilunga-b76a4865/', country: 'cd'},
        {name: 'Bernard Ng', role: 'Hackaton Organizer | Technical support', organization: 'Université Nouveaux Horizons', image: '/organizers/648adf11aa06a336722320.jpg', link: 'https://www.linkedin.com/in/bernard-ngandu/', country: 'cd'},
    ],
    speakers: [
        {name: 'Nicanor Mayumu', role: 'Director, IndabaX DRC', organization: 'Mapon University', image: '/organizers/632f2b56cec9e786115539.jpeg', link: 'https://www.linkedin.com/in/nicanor-mayumu-500366141/', country: 'cd'},
        {name: 'Saint-jean Djungu', role: 'Supervisor', organization: 'Université Nouveaux Horizons', image: '/organizers/6435b4431982d148698159.jpeg', link: 'https://scholar.google.be/citations?user=ljQWHb8AAAAJ&hl=fr', country: 'cd'},
        {name: 'Godwill Ilunga', role: 'Director, Local Organizer', organization: 'Université Nouveaux Horizons', image: '/organizers/643561c40bf5a049771911.jpeg', link: 'hhttps://www.linkedin.com/in/godwill-ilunga-b76a4865/', country: 'cd'},
        {name: 'Bernard Ng', role: 'Hackaton Organizer | Technical support', organization: 'Université Nouveaux Horizons', image: '/organizers/648adf11aa06a336722320.jpg', link: 'https://www.linkedin.com/in/bernard-ngandu/', country: 'cd'},
    ]
}

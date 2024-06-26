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
    organizers: Person[],
    speakers: Person[]
}

export default {
    id: 3,
    name: 'Indabax 2024 - Université de Lubumbashi',
    description: "L'Intelligence artificielle pour l'exploitation minière durable : Innovation et impact environnemental",
    location: "Université de Lubumbashi, Lubumbashi, Haut-Katanga R.D. Congo",
    registrationGoogleFormLink: 'https://forms.gle/mJurbmMWsATQYLJx6',
    programGoogleDocsLink: '',
    eventEndsAt: '22 Août 2024',
    eventStartsAt: '24 Août 2024',
    pricing: {
        student: 20,
        academic: 35,
        professional: 50
    },
    sponsors: [
        {name: 'Zindi', image: '/sponsors/632f1784dc7d6263823796.png', link: 'https://zindi.africa', category: 'platinum'},
        {name: 'Deep learning indaba', image: '/sponsors/632f18aed2506398507585.svg', link: 'https://deeplearningindaba.com', category: 'platinum'},
        // {name: 'Université Nouveaux Horizons', image: 'public/sponsors/63f4eec820e66159906472.png', link: 'https://unhorizons.com', category: 'platinum'},
        {name: 'NeoTex', image: '/sponsors/6482e84df37ea368335328.png', link: 'https://neotex.com', category: 'platinum'},
        {name: 'Mozilla', image: '/sponsors/6482eae52c18e726856962.png', link: 'https://mozilla.org', category: 'platinum'},
    ],
    organizers: [
        {name: 'Nicanor Mayumu', role: 'Director, IndabaX DRC', organization: 'Mapon University', image: '/organizers/632f2b56cec9e786115539.jpeg', link: 'https://www.linkedin.com/in/nicanor-mayumu-500366141/', country: 'cd'},
        {name: 'Arthur Kaniki', role: 'Supervisor', organization: 'Université de Lubumbashi', image: 'https://media.licdn.com/dms/image/C4E03AQGwxtkiHOhREw/profile-displayphoto-shrink_800_800/0/1516869232423?e=1719446400&v=beta&t=85pphlLbJTWzkEWFxI9KoPc_tixlNp8VEKtE8uZ04Hg', link: 'https://www.linkedin.com/in/arthur-kaniki-1106a482/', country: 'cd'},
        {name: 'Berthine Nyunga', role: 'Hackathon Organizer', organization: '', image: '/organizers/632f2cecdba6e092235240.jpg', link: 'https://berthine.github.io', country: 'cd'},
        {name: 'Bernard Ng', role: 'Hackaton Organizer | Technical support', organization: 'Université Nouveaux Horizons', image: '/organizers/648adf11aa06a336722320.jpg', link: 'https://www.linkedin.com/in/bernard-ngandu/', country: 'cd'},
    ],
    speakers: [
        {name: 'Antoine Bagula, PhD', role: 'Speaker', organization: 'University of Western Cape', image: '/organizers/634d5fed05733262169654.jpg', link: 'https://www.linkedin.com/in/antoine-bagula-2075305/?originalSubdomain=za', country: 'za'},
        {name: 'Meshia Cédric Oveneke, PhD', role: 'Speaker', organization: 'Neotex.ai', image: '/organizers/64355d8597a5c676189023.jpeg', link: 'https://www.linkedin.com/in/meshiacedricoveneke/?originalSubdomain=be', country: 'za'},
        {name: 'Pierre Kafunda, PhD', role: 'Speaker', organization: 'Université de Kinshasa', image: '/organizers/64465a548c5ff556470643.jpeg', link: '', country: 'cd'},
        {name: 'Patrick Mukala, PhD', role: 'Speaker', organization : 'Univesity of Wollongong in Dubai', image: '/organizers/64355fe07d732238537489.jpeg', link: 'https://www.linkedin.com/in/dr-patrick-mukala/', country: 'ae'},
        {name: 'Jordan F. Masakuna, PhD', role: 'Speaker', organization: 'University of Sherbrooke', image: '/organizers/64356049422e3998346198.jpeg', link: 'https://www.linkedin.com/in/jordan-f-masakuna-phd-194a68b4/', country: 'cd'},
        {name: 'Cyrille Kesiku', role: 'Speaker', organization: 'Univesity of DEUSTO', image: '/organizers/644481ce42378981370083.jpeg', link: 'https://www.linkedin.com/in/cyrille-kesiku-396100196/', country: 'cd'},
        {name: 'Nicanor Mayumu, PhD', role: 'Director, IndabaX DRC', organization: 'Mapon University', image: '/organizers/632f2b56cec9e786115539.jpeg', link: 'https://www.linkedin.com/in/nicanor-mayumu-500366141/', country: 'cn'},
        {name: 'Philippe Faradja, PhD', role: 'Speaker', organization: 'Université Protestante au Congo', image: '/organizers/6478da5989c38580163297.jpeg', link: 'https://www.linkedin.com/in/philippe-faradja-b974b852/', country: 'cd'},
        {name: 'Diana Pholo', role: 'Speaker', organization: 'Predictive Insights', image: '/organizers/648620f2f3694268247135.jpeg', link: 'https://www.linkedin.com/in/diana-pholo-moanda-76ba803b/', country: 'za'},
        {name: 'Junior Muka', role: 'Speaker', organization: 'Woolworth South Africa', image: '/organizers/6478daaf554f3616239108.jpeg', link: 'https://www.linkedin.com/in/junior-muka-aa0b0b7/', country: 'za'},
    ]
}

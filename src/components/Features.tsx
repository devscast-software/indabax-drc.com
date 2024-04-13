export default function Features() {
    return (
        <div className="lg:w-2/3 mx-auto">
            <div className="relative md:text-lg py-16 grid sm:grid-cols-2 gap-10 before:absolute before:inset-0 before:w-0 sm:before:w-0.5 before:h-full before:m-auto before:bg-slate-300">
                <div className="sm:col-start-2">
                    <h3 className="text-3xl text-white">Recherche</h3>
                    <p className="mt-4 text-white">Échanger les connaissances scientifiques en IA entre chercheurs et toutes les parties prenantes</p>
                </div>
                <div className="sm:col-start-1 sm:text-right">
                    <h3 className="text-3xl">Applications de l'IA</h3>
                    <p className="mt-4 text-white">Présenter les applications de l’IA dans différents domaines dans
                        lesquels exercent nos partenaires.</p>
                </div>
                <div className="sm:col-start-2 row-start-3">
                    <h3 className="text-3xl text-white">Communauté</h3>
                    <p className="mt-4 text-white">
                        Connecter avec d’autres chercheurs et praticiens. Élargir notre communauté.
                    </p>
                </div>
                <div className="sm:col-start-1 row-start-4 sm:text-right">
                    <h3 className="text-3xl text-white">Tutoriels</h3>
                    <p className="mt-4 text-white">Fournir une introduction pratique à l’apprentissage automatique pour
                        les débutants.</p>
                </div>
                <div className="sm:col-start-2 row-start-5">
                    <h3 className="text-3xl text-white">Hackathon</h3>
                    <p className="mt-4 text-white">Proposer des solutions au problème posé en utilisant les données
                        fournies.</p>
                </div>
                <div className="sm:col-start-1 row-start-6 sm:text-right">
                    <h3 className="text-3xl text-white">Session Posters</h3>
                    <p className="mt-4 text-white">Présenter votre travail et obtenir les commentaires des experts.</p>
                </div>
            </div>
        </div>
    );
}
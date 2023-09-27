import event, {type Sponsor} from "../data/event";

export default function Sponsors() {
    return (
        <div id="sponsors" className="mt-16">
            <h2 className="text-xl text-center text-white">
                Nos sponsors
            </h2>
            <div className="m-auto mt-12 xl:px-12">
                <div className="grid grid-cols-4 flex-wrap justify-center items-center gap-6">
                    {event.sponsors.map((s: Sponsor) => (<img key={s.image} src={s.image} title={s.name} className="contrast-100 h-12 w-auto mx-auto" loading="lazy" alt={"Logo " + s.name} />))}
                </div>
            </div>
        </div>
    );
}

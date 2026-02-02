import EventCard from "./EventCardV3";


const Events = () => {
    return <div className="flex flex-col items-center mb-">
        <div className="my-6 mt-10 flex flex-col items-center">
            <h1 className="text-6xl font-bold m-4 text-[#d4af37] text-center">
                Featured Events
            </h1>
            <div className="bg-[#d4af37] h-1 w-16 m-2"></div>
            <p className="text-lg m-2 mb-6 lg:mb-14 text-slate-400">
                Stay tuned. The premiere is coming soon.
            </p>
        </div>
        <div className="text-white gap-6 xl:gap-0 grid
                        grid-cols-1 grid-rows-6
                        md:grid-cols-2 md:grid-rows-3 md:gap-14
                        xl:grid-cols-3 xl:grid-rows-2 xl:gap-10
        ">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />

        </div>
    </div>
}

export default Events;

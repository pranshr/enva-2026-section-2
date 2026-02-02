import Carousel from "./Carousel";



const About = () => {
    return <div className="flex flex-col lg:flex-row text-white justify-between xl:p-8 2xl:w-[79%]">
        <div className="lg:w-2/5 p-6 lg:px-8 pb-6">
            <h1 className="mt-4 mb-1 text-6xl font-bold text-[#d4af37]">
                ENVA
            </h1>
            <h2 className="mb-1 text-3xl lg:text-4xl font-medium text-[#d4af37]">
                Annual College Fest
            </h2>
            <p className="my-3 text-lg lg:text-xl font-[300]">
                ENVA is organised by Prakriti MSIT is a fun-packed, frolicsome event which is a 2-day-long spectacle held in January. The fest not only sees involvement of students, but also teachers, showcasing wholesome senior-junior interaction.
            </p>

        </div>



        <div className="lg:w-3/5 pt-1 pb-10 lg:p-0">
            <Carousel />
        </div>
    </div>
}

export default About;

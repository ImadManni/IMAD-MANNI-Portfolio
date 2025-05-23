/**
 * @copyright 2024 Imad Manni
 * @license Apache2.0
 */

const aboutItems = [
    {
      label: 'Project done',
      number: 12
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];
const About = () => {
    return (
        <section
        id="about"
        className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                     Welcome! I&apos;m Imad, a Web developer with a knack for crafting visually
                     stunning and highly functional websites. Combining creativity and technical expertise.
                     I transform your vision into digital masterpiece that excels in both appearance and performance.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                        </div>
                                        <p className="">{label}</p>
                                        </div>
                            ))
                        }
                        <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/051/226/497/small_2x/a-blue-globe-with-a-network-of-lines-connecting-it-the-globe-is-surrounded-by-a-white-background-png.png"
                        sizes={400}
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About

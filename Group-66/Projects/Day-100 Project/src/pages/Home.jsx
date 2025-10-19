import { Link } from "react-router-dom";


function Home(){
    return(<>

        <main>
            <section className="flex flex-col md:flex-row items-center w-full h-auto p-4 bg-[url(/img/mainBack.jpg)] bg-cover gap-5">
                <div className="flex flex-col m-auto p-2 gap-6 w-full max-w-3xl">

                    <h1 className="text-3xl sm:text-5xl p-2">Discover Your Hidden Talent</h1>
                    <p className="text-base sm:text-lg">
                    Every human has unique strengths waiting to be uncovered.
                    From memory and focus to creativity and reflexes,
                    your abilities can grow with practice and curiosity. 
                    By exploring new challenges, 
                    you not only reveal hidden talents but also unlock your potential for personal growth and achievement.
                    </p>

                    <Link
                        to="/Account"
                        className="text-white text-center no-underline mx-auto blButtonStyle px-4 py-2 rounded-xl w-full max-w-xs"
                    >
                        Get Started!
                    </Link>
                    
                </div>
                <img src="/img/homeBack.png" className="w-full max-w-md m-auto" />


            </section>
            <section className=" flex justify-center w-screen ">
                <div className="flex flex-col w-full max-w-4xl mx-auto px-4">
                    <h1 className="text-2xl sm:text-3xl font-bold mt-30 mb-4 text-center p-2">Unlock Your Full Potential</h1>
                    <p className="text-base sm:text-lg">
                        Our site offers engaging challenges,
                        personalized exercises, 
                        and tools to improve your memory, 
                        reflexes, and creativity. 
                        Whether you want to sharpen your mind, 
                        discover hidden talents, 
                        or simply have fun learning new skills, 
                        we provide everything you need to grow and achieve your goals.
                    </p>
                </div>
            </section>

        </main>

    </>)

}


export default Home;
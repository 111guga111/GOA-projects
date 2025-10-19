import { useEffect, useState } from "react"

function Library(){
    const [info, setInfo] = useState([
    {
        title: "Brain",
        description: 
            `Explore the different regions like the cerebrum, cerebellum, and brainstem.
            Learn how neurons communicate and process information, and understand the importance of brain health.`,
        text: 
            `The brain is the control center of the human body.
            It regulates thoughts, memory, emotions, touch, motor skills, vision, breathing, and many other processes that keep us alive and functioning.`
    },
    {
        title: "Eyes",
        description: 
            `Learn how the cornea, lens, retina, and optic nerve work together to send visual information to the brain.
            Understand common vision problems and ways to protect your eyes.`,
        text: 
            `Eyes are the organs of vision, allowing humans to perceive light, color, and movement.
            They help us navigate and understand the world around us.`
    },
    {
        title: "Heart",
        description: 
            `Discover the structure of the heart, including its four chambers and valves.
            Learn about heartbeat regulation, circulation, and how exercise affects heart health.`,
        text: 
            `The heart is a muscular organ that pumps blood throughout the body.
            It supplies oxygen and nutrients while removing waste.`
    },
    {
        title: "Lungs",
        description: 
            `Explore the structure of bronchi, alveoli, and the diaphragm.
            Learn how breathing adapts to activity and environmental changes.`,
        text: 
            `Lungs are essential for respiration.
            They allow oxygen to enter the blood and carbon dioxide to leave.`
    },
    {
        title: "Muscles",
        description: 
            `Learn about skeletal, cardiac, and smooth muscles.
            Understand muscle contraction, strength development, and endurance training.`,
        text: 
            `Muscles enable movement, stability, and posture.
            They work in coordination with bones and joints.`
    },
    {
        title: "Bones",
        description: 
            `Learn about major bones, joints, and cartilage.
            Understand bone growth, repair, mineral storage, and blood cell production in bone marrow.`,
        text: 
            `The skeletal system provides structure, support, and protection for vital organs.`
    },
    {
        title: "Digestive System",
        description: 
            `Follow the journey from the mouth to the stomach, small intestine, and large intestine.
            Learn about enzymes, bacteria, and the roles of the liver and pancreas.`,
        text: 
            `The digestive system breaks down food into nutrients the body can absorb and use for energy.`
    },
    {
        title: "Skin",
        description: 
            `Explore the layers of the skin: epidermis, dermis, and subcutaneous tissue.
            Learn about skin health, immunity, and common skin conditions.`,
        text: 
            `Skin is the largest organ and serves as a protective barrier.
            It helps regulate temperature and sense the environment.`
    },
    {
        title: "Nervous System",
        description: 
            `Learn about the central and peripheral nervous systems.
            Understand how neurons transmit electrical signals and coordinate body functions.`,
        text: 
            `The nervous system controls and communicates information throughout the body.`
    },
    {
        title: "Endocrine System",
        description: 
            `Explore glands like the thyroid, adrenal glands, and pancreas.
            Learn how hormones influence body systems and overall health.`,
        text: 
            `The endocrine system consists of glands that release hormones regulating growth, metabolism, reproduction, and mood.`
    },
    {
        title: "Circulatory System",
        description: 
            `Understand how the heart, arteries, veins, and capillaries work together.
            Learn about blood composition and the immune system’s role in protection.`,
        text: 
            `The circulatory system transports blood, oxygen, nutrients, and waste products throughout the body.`
    },
    {
        title: "Immune System",
        description: 
            `Learn about white blood cells, antibodies, lymph nodes, and how the body identifies invaders.
            Discover ways to strengthen immunity naturally.`,
        text: 
            `The immune system protects the body from infections, viruses, and diseases.`
    },
    {
        title: "Liver",
        description: 
            `Learn how the liver metabolizes proteins, fats, and carbohydrates.
            Understand its role in detoxification and overall health.`,
        text: 
            `The liver is a vital organ that processes nutrients, filters toxins, and produces bile.`
    },
    {
        title: "Kidneys",
        description: 
            `Understand kidney function, nephrons, and how they maintain fluid and electrolyte balance.
            Learn about kidney health and common diseases.`,
        text: 
            `Kidneys filter waste and excess fluids from the blood, forming urine.`
    },
    {
        title: "Reproductive System",
        description: 
            `Explore male and female reproductive organs and their functions.
            Learn about the reproductive cycle, hormones, and reproductive health.`,
        text: 
            `The reproductive system enables humans to produce offspring.`
    }
    ]);



    
    useEffect(() => {
        const savedInfo = localStorage.getItem("Info");
        if (savedInfo) {
        setInfo(JSON.parse(savedInfo));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("Info", JSON.stringify(info));
    }, [info]);

    return(<>
        <main className="flex flex-col items-center w-full px-4">

            <section className="mt-10 text-center w-full max-w-5xl mx-auto">
                <section>
                    <h1 className="text-4xl p-1">Know Yourself!</h1>
                    <p>Explore a wealth of information in our library.</p>
                </section>
                <section className="mt-10 h-190 bg-gray-100 border-2 p-10 scrollbar-black">
                    {info.map(item => <div key={item.title} className="w-full border-2 p-4 bg-gray-50 rounded mb-4"><h1 className="text-4xl font-bold p-1 ">{item.title}</h1><h2 className="text-2xl mb-5">{item.description}</h2><p className="text-2xl">{item.text}</p></div> )}
                </section>
            </section>
        </main>
    </>)
}


export default Library
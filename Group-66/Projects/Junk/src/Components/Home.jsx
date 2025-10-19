
function Home() {
  return (
    <>
        <h1>Human Anatomy</h1>
        <section className=" flex w-100 h-100 relative">
            <img className="w-230 absolute top-10 left-123" src="src\Photos\Body.svg" alt="Human Body" />
            <img className="w-15 absolute top-25 left-233" src="src\Photos\Brain.svg" alt="Human Brain" />
            <img className="w-17 absolute top-60 left-235 z-1 " src="src\Photos\Heart.svg" alt="Human Brain" />
            <img className="w-25 absolute top-82 left-227" src="src\Photos\Liver.svg" alt="Human Brain" />
            <img className="w-35 absolute top-52 left-223 " src="src\Photos\Lungs.svg" alt="Human Brain" />
            <img className="w-20 absolute top-96 left-234" src="src\Photos\Stomach.svg" alt="Human Brain" />
        </section>
    </>
  );
}

export default Home; 
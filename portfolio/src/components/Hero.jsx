 // Add a dummy image in assets

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center">
      <img
        src={"jkjkk"}
        alt="Navdeep Thakur"
        className="w-32 h-32 rounded-full shadow-lg mb-6 border-4 border-teal-400 object-cover"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in">
        Navdeep Thakur
      </h1>
      <h2 className="text-xl md:text-2xl text-teal-400 mb-4 font-semibold">
        Full Stack Web Developer
      </h2>
      <p className="max-w-xl text-gray-300 mb-6">
        Passionate Full Stack Web Developer skilled in the MERN stack. I love building modern, scalable, and user-friendly web applications with clean code and creative solutions.
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-block px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition-all duration-200 shadow-md"
      >
        Download Resume
      </a>
    </section>
  )
}

export default Hero

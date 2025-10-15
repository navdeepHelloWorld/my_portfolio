const projects = [
  {
    title: "E-Commerce Platform",
    image: "https://source.unsplash.com/400x250/?ecommerce,website",
    desc: "A full-featured MERN stack e-commerce platform with authentication, cart, and admin dashboard.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/navdeep/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    title: "Portfolio Website",
    image: "https://source.unsplash.com/400x250/?portfolio,website",
    desc: "Personal portfolio website to showcase my projects and skills.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/navdeep/portfolio",
    demo: "https://portfolio-demo.com",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-teal-600 text-xs px-2 py-1 rounded text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors text-sm font-semibold"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded transition-colors text-sm font-semibold"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

function Contact() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-400">Contact</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full md:w-1/2">
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> <a href="tel:7018641403" className="text-teal-400 hover:underline">7018641403</a>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> <a href="mailto:navdeepthakur2002@gmail.com" className="text-teal-400 hover:underline">navdeepthakur2002@gmail.com</a>
          </p>
          <p className="mb-2">
            <span className="font-semibold">GitHub:</span> <a href="https://github.com/navdeep" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">github.com/navdeep</a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/navdeep" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">linkedin.com/in/navdeep</a>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Contact

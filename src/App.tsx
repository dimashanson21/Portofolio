function App() {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-semibold tracking-wide text-lg">
            Dimas Hanson
          </h1>

          <div className="space-x-8 text-gray-300 hidden md:flex">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#portfolio" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-28">

        <img
          src="/Passport Picture.jpeg"
          alt="Dimas Hanson"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-gray-700 shadow-xl"
        />

        {/* GRADIENT NAME */}
        <h1 className="text-5xl md:text-6xl font-bold mt-8 tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Dimas Hanson
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
          Full Stack Developer transitioning from Video Editing,
          combining creativity with modern web development.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#portfolio"
            className="px-7 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-gray-700 rounded-xl hover:bg-gray-900 transition"
          >
            Contact
          </a>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-10">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I am a former video editor transitioning into a Full Stack Developer.
            My creative background helps me build modern, visually engaging,
            and responsive web applications using HTML, CSS, and TypeScript.
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-[#111] px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold text-center mb-14">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:-translate-y-3 hover:border-gray-600 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <p className="text-gray-400">HTML · CSS · TypeScript</p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:-translate-y-3 hover:border-gray-600 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Tools</h3>
              <p className="text-gray-400">Git · Vite · VS Code</p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:-translate-y-3 hover:border-gray-600 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Creative</h3>
              <p className="text-gray-400">Video Editing · Content Creation</p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-semibold text-center mb-12">
            Experience
          </h2>

          <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
            <h3 className="text-xl font-semibold">
              Full-Time Video Editor
            </h3>

            <p className="text-gray-500 text-sm mt-2 mb-4">
              2023 — 2024
            </p>

            <p className="text-gray-400 leading-relaxed">
              Produced engaging visual content while developing creativity,
              storytelling ability, and strong project management skills now
              applied to software development.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="portfolio" className="py-24 bg-[#111] px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold text-center mb-14">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-black p-8 rounded-2xl border border-gray-800 hover:-translate-y-3 hover:border-gray-500 transition duration-300 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Personal Portfolio Website
              </h3>

              <p className="text-gray-400">
                Built using React, Vite, and Tailwind CSS to showcase skills,
                experience, and development journey with responsive design.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">

        <h2 className="text-4xl font-semibold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 text-lg">
          dimdim.hanson@gmail.com
        </p>

        <p className="text-gray-500 mt-2">
          Indonesia
        </p>

      </section>

    </div>
  );
}

export default App;
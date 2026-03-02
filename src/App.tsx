function App() {
  return (
    <div className="bg-[#0b1220] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#0b1220]/80 backdrop-blur-lg border-b border-blue-900/40 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-semibold tracking-wide text-lg text-blue-400">
            Dimas Hanson
          </h1>

          <div className="space-x-8 text-gray-300 hidden md:flex">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#portfolio" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-28">

        <img
          src="/Passport Picture.jpeg"
          alt="Dimas Hanson"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-blue-500 shadow-xl"
        />

        {/* BLUE GRADIENT NAME */}
        <h1 className="text-5xl md:text-6xl font-bold mt-8 tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
          Dimas Hanson
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-xl leading-relaxed">
          Full Stack Developer transitioning from Video Editing,
          combining creativity with modern web development.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#portfolio"
            className="px-7 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-blue-500 rounded-xl hover:bg-blue-900/30 transition"
          >
            Contact
          </a>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-10 text-blue-400">
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
      <section id="skills" className="py-24 bg-[#0f172a] px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold text-center mb-14 text-blue-400">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#020617] p-8 rounded-2xl border border-blue-900 hover:-translate-y-3 hover:border-blue-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <p className="text-gray-400">HTML · CSS · TypeScript</p>
            </div>

            <div className="bg-[#020617] p-8 rounded-2xl border border-blue-900 hover:-translate-y-3 hover:border-blue-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Tools</h3>
              <p className="text-gray-400">Git · Vite · VS Code</p>
            </div>

            <div className="bg-[#020617] p-8 rounded-2xl border border-blue-900 hover:-translate-y-3 hover:border-blue-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-3">Creative</h3>
              <p className="text-gray-400">Video Editing · Content Creation</p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-semibold text-center mb-12 text-blue-400">
            Experience
          </h2>

          <div className="bg-[#020617] p-8 rounded-2xl border border-blue-900 hover:border-blue-500 transition">
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
      <section id="portfolio" className="py-24 bg-[#0f172a] px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold text-center mb-14 text-blue-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-[#020617] p-8 rounded-2xl border border-blue-900 hover:-translate-y-3 hover:border-blue-400 transition duration-300 shadow-lg">
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

        <h2 className="text-4xl font-semibold mb-6 text-blue-400">
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
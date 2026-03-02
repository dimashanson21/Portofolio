function App() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md flex justify-center gap-10 py-4 z-50 border-b border-gray-800">
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#skills" className="hover:text-gray-300">Skills</a>
        <a href="#experience" className="hover:text-gray-300">Experience</a>
        <a href="#portfolio" className="hover:text-gray-300">Projects</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="/Passport Picture.jpeg"
          alt="Dimas Hanson"
          className="w-36 h-36 rounded-full object-cover border-4 border-gray-700 mb-6"
        />

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Dimas Hanson
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Full Stack Developer · Former Video Editor
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 leading-relaxed">
            I am a former video editor transitioning into a Full Stack Developer.
            My creative background allows me to approach web development with
            strong visual awareness, storytelling, and attention to detail.
            Currently focused on building responsive web applications using
            modern technologies such as HTML, CSS, and TypeScript.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-[#111] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-black rounded-2xl border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400">HTML · CSS · TypeScript</p>
            </div>

            <div className="p-6 bg-black rounded-2xl border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-gray-400">Git · Vite · VS Code</p>
            </div>

            <div className="p-6 bg-black rounded-2xl border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-2">Creative</h3>
              <p className="text-gray-400">Video Editing · Content Creation</p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold">
              Freelance Video Editor
            </h3>

            <p className="text-gray-500 text-sm mb-3">
              2022 — 2024
            </p>

            <p className="text-gray-400">
              Produced visual content while developing strong design thinking,
              deadline management, and creative problem-solving skills that now
              support my journey into software development.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="portfolio" className="py-24 bg-[#111] px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-6 bg-black rounded-2xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">
                Personal Portfolio Website
              </h3>

              <p className="text-gray-400">
                Developed a responsive personal portfolio using React, Vite,
                and Tailwind CSS to showcase skills and professional background.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400">
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
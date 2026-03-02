function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <img
          src="Passport Picture.jpeg"
          alt="Dimas Hanson"
          className="ww-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-gray-700"
        />
        <h1 className="text-4xl md:text-6xl font-bold">
          Dimas Hanson Fritzgerald Hamonangan
        </h1>
        <p className="text-xl text-gray-400 mt-4">
          Former Video Editor → Full Stack Developer
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition">
          Contact Me
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I am a former video editor who is currently transitioning into a Full Stack Developer.
          I have a strong interest in web development and enjoy building modern and responsive
          websites using HTML, CSS, and TypeScript. My background in video editing has helped
          me develop creativity, attention to detail, and problem-solving skills that I now
          apply to coding and web design.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-black p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400">HTML, CSS, TypeScript</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-gray-400">VS Code, Vite, Git</p>
            </div>
            <div className="bg-black p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">Creative</h3>
              <p className="text-gray-400">Video Editing, Content Creation</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
          Experience
        </h2>
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold">
            Video Editor (Freelance)
          </h3>
          <p className="text-gray-400 mt-2">
            Worked as a video editor creating engaging content and managing visual storytelling.
            Developed strong creativity, time management, and attention to detail skills which
            are now applied in web development projects.
          </p>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-20 px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
            Portfolio
          </h2>
          <div className="bg-black p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold">
              Personal Portfolio Website
            </h3>
            <p className="text-gray-400 mt-2">
              Built a personal portfolio website using React, Vite, and TypeScript to showcase
              my skills, background, and professional journey as a transitioning Full Stack Developer.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
          Contact
        </h2>
        <p className="text-gray-400">
          Email: dimdim.hanson@gmail.com
        </p>
        <p className="text-gray-400 mt-2">
          Location: Indonesia
        </p>
      </section>

    </div>
  );
}

export default App;
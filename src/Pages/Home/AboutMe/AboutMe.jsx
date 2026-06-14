import hero from '../../../assets/images//WhatsApp Image 2026-01-20 at 5.50.05 PM.jpeg'
const AboutMe = () => {

  return (
    <section data-aos="fade-left" className="bg-linear-to-l from-amber-700 py-20 bg-black/90 text-white w-full md:w-[98%] lg:w-[98%] mx-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="About me"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-amber-500">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-5">
            I am a passionate Full-Stack Web Developer who loves building
            modern, responsive, and scalable web applications.
            I focus on clean code, performance, and great user experience.
          </p>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>✅ Frontend: React, Tailwind CSS</li>
            <li>✅ Backend: Node.js, Express, Firebase</li>
            <li>✅ Always learning & improving</li>
          </ul>

          <button className="mt-6 btn bg-amber-600 hover:bg-amber-700 text-black">
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;

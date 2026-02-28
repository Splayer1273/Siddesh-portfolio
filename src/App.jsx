import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin } from "react-icons/fa"
import { SiDjango, SiMongodb, SiMysql, SiJavascript } from "react-icons/si"
import emailjs from "@emailjs/browser"
import { useRef } from "react"

function App() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_bkjsn3c",
      "template_o80x2zc",
      form.current,
      "0WJfhDhxf39xymmrG"
    )
    .then(() => {
      alert("Message Sent Successfully 🚀")
    })
    .catch((error) => {
      console.log(error)
      alert("Something went wrong ❌")
    })

    e.target.reset()
  }

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-black/40 backdrop-blur-md border-b border-gray-800">
        <h1 className="text-xl font-bold text-blue-500">Siddesh</h1>
        <div className="space-x-6 text-gray-400 hidden md:block">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center pt-40 pb-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I'm <span className="text-blue-500">Siddesh Sonavane</span>
        </motion.h2>

        <p className="mt-6 text-gray-400 text-lg">
          Full Stack Developer | React | Node.js | Django
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="https://github.com/Splayer1273" target="_blank" className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 flex items-center gap-2">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/siddesh-sonavane-1896452b0/" target="_blank" className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="/resume.pdf" download className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700">
            Download Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-12 py-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-blue-500 mb-6">About Me</h3>
        <p className="text-gray-400 leading-8">
          I am a Bachelor of Engineering (Information Technology) student pursuing my degree
          at Indala College of Engineering. I completed my Diploma in Computer Science from
          Samarth Polytechnic (2021–2023).
        </p>
        <p className="text-gray-400 leading-8 mt-4">
          I specialize in full-stack development and have built real-world projects like
          a Django-based Music Player application and a student marketplace platform.
          I also completed a Software Development Internship working on live production systems.
        </p>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-12 py-20 bg-black/40">
        <h3 className="text-3xl font-bold text-center text-blue-500 mb-12">Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {[FaReact, FaNodeJs, SiDjango, SiJavascript, SiMongodb, SiMysql, FaPython].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800"
            >
              <Icon size={40} className="mx-auto text-blue-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-12 py-20">
        <h3 className="text-3xl font-bold text-center text-blue-500 mb-12">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h4 className="text-xl font-semibold">Music Player App</h4>
            <p className="text-gray-400 mt-3">
              Django-based music platform with authentication, upload, search and pagination.
            </p>
            <a href="https://music-player-rq95.onrender.com/" target="_blank" className="text-blue-500 mt-4 inline-block">
              View Project →
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h4 className="text-xl font-semibold">TradeHub Marketplace</h4>
            <p className="text-gray-400 mt-3">
              A community-driven platform where students can buy and sell academic items.
            </p>
          </motion.div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 md:px-12 py-20 bg-black/40">
        <h3 className="text-3xl font-bold text-center text-blue-500 mb-12">Experience</h3>

        <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h4 className="text-xl font-semibold">Software Development Intern</h4>
          <p className="text-blue-400">
            Aurevo28 Prop-Tech Pvt. Ltd. | July 2025 – October 2025
          </p>
          <ul className="text-gray-400 mt-4 list-disc list-inside space-y-2">
            <li>Worked on FirstBuy.com production platform</li>
            <li>Developed and maintained live web pages</li>
            <li>Collaborated with development team on production features</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-12 py-20 text-center">
        <h3 className="text-3xl font-bold text-blue-500 mb-8">Contact Me</h3>

        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto flex flex-col gap-4">
          <input type="text" name="user_name" placeholder="Your Name" required className="p-3 bg-gray-800 rounded-lg" />
          <input type="email" name="user_email" placeholder="Your Email" required className="p-3 bg-gray-800 rounded-lg" />
          <textarea name="message" placeholder="Your Message" required className="p-3 bg-gray-800 rounded-lg" />
          <button type="submit" className="bg-blue-500 py-3 rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 Siddesh Sonavane
      </footer>

    </div>
  )
}

export default App
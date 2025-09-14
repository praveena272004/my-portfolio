import React, { useState, useEffect } from "react";
import {
  ArrowUp,
  Code,
  User,
  Cpu,
  FolderGit2,
  Mail,
  Linkedin,
  Github,
} from "lucide-react"; 
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiNetlify,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";
// ====== PERSONAL INFO ======
const PERSON = {
  name: "Praveena M",
  tagline: "Frontend Developer • React | Redux | Tailwind",
  location: "Tamil Nadu, India",
  email: "praveenamanivannan2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/praveena-manivannan-3766b0336",
  github: "https://github.com/praveena272004",
  resume: "/Praveena_Resume.pdf",
  about: `I’m a B.E. ECE (Hons.) student passionate about web development, creating responsive and interactive applications with React, Tailwind CSS, Redux Toolkit, Python and modern tools like Vite & Netlify.`,
};

const PROJECTS = [
  {
    title: "Task Manager",
    desc: "A simple task manager built with react.js and material-ui (MUI). Add, edit, delete, and filter tasks with dark/light mode support and local storage.",
    live: "https://taskmanager-tm.netlify.app/",
    repo: "https://github.com/praveena272004/task-manager-app",
  },
  {
    title: "ShopZen (E-commerce Demo)",
    desc: "ShopZen is a modern, responsive e-commerce web application built with React, Redux Toolkit, and Material-UI. It allows users to browse products, view details, manage a shopping cart, place orders, and submit feedback.",
    live: "https://shopzen-sz.netlify.app/",
    repo: "https://github.com/praveena272004/shopzen",
  },
];

// ====== NAVBAR ======
function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Cpu className="w-4 h-4" /> },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderGit2 className="w-4 h-4" />,
    },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-3 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-white" />
          <span className="logo-font text-2xl font-bold text-white">PM</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-bold text-1xl">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={` flex justify-center items-center gap-1 transition-colors ${
                active === link.id
                  ? "text-white font-bold"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 text-2xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-800 text-gray-200 flex flex-col items-center divide-y divide-gray-900">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`w-full py-3  flex justify-center items-center gap-1 transition-colors ${
                active === link.id
                  ? "font-semibold textwhite bg-gray-800"
                  : " hover:bg-gray-700 font-bold"
              }`}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ====== HERO ======
function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 pb-24 bg-white text-center text-gray-800 scroll-mt-20 border-b border-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-900 typewriter logo-font">
          Hi, I’m {PERSON.name}
        </h1>

        <p className="text-md sm:text-lg text-gray-800 font-semibold mb-6 logo-font">
          {PERSON.tagline}
        </p>
        <p className="text-gray-800 max-w-2xl mx-auto mb-6">{PERSON.about}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Praveena_Resume.pdf"; 
              link.download = "Praveena_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

// ====== ABOUT ======
function About() {
  return (
    <section
      id="about"
      className="pt-10 pb-24 bg-white text-gray-800 scroll-mt-20 border-b border-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 logo-font">
          About Me
        </h2>
        <p className="mb-5 sm:text-lg text-md text-gray-800">
          I am a B.E. Electronics and Communication Engineering (Hons.) student
          with a strong passion for web development and creating seamless user
          experiences. Over time, I have developed proficiency in{" "}
          <span className="font-semibold">
            React.js, Tailwind CSS, Redux Toolkit, Vite, Netlify and Python
          </span>
          , along with solid fundamentals in{" "}
          <span className="font-semibold">HTML, CSS, and JavaScript</span>.
        </p>
        <p className="mb-5 sm:text-lg text-md text-gray-800">
          I enjoy building{" "}
          <span className="font-semibold">
            responsive, interactive, and modern web applications
          </span>{" "}
          that solve real-world problems. I have completed projects that
          demonstrate my ability to design, develop, and deploy applications
          efficiently.
        </p>
        <p className="mb-5 sm:text-lg text-md text-gray-800">
          I am constantly learning and exploring new technologies in the
          frontend ecosystem, focusing on writing clean, maintainable code and
          creating intuitive user interfaces. My goal is to contribute to
          innovative web projects while continuing to{" "}
          <span className="font-semibold">grow as a full-stack developer.</span>
        </p>
        <p className="mb-5 sm:text-lg text-md text-gray-800">
          I also have a solid foundation in embedded systems, circuit design,
          and telecommunications. I enjoy collaborating with others, solving
          challenges creatively, and delivering high-quality solutions that make
          a positive impact.
        </p>
      </div>
    </section>
  );
}

// ====== SKILLS ====== //
function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, type: "frontend" },
    { name: "CSS", icon: <FaCss3Alt />, type: "frontend" },
    { name: "JavaScript", icon: <FaJsSquare />, type: "frontend" },
    { name: "React", icon: <FaReact />, type: "frontend" },
    { name: "Redux Toolkit", icon: <SiRedux />, type: "frontend" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, type: "frontend" },
    { name: "Python", icon: <FaPython />, type: "backend" },
    { name: "Vite", icon: <SiVite />, type: "tool" },
    { name: "Git", icon: <SiGit />, type: "tool" },
    { name: "GitHub", icon: <FaGithub />, type: "tool" },
    { name: "Netlify", icon: <SiNetlify />, type: "deployment" },
  ];

  const colorMap = {
    frontend: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900",
    backend: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900", // Color for Python
    tool: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-900",
    deployment: "bg-gradient-to-r from-green-100 to-green-200 text-green-900",
  };

  return (
  <section
    id="skills"
    className="relative pt-16 pb-30 bg-white text-gray-900 scroll-mt-20 border-b border-white"
  >
    <motion.div
      className="absolute inset-0 bg-gradient-radial from-gray-50 via-transparent to-transparent pointer-events-none"
      animate={{ scale: [1, 1.03, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Skills content */}
    <div className="relative max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 logo-font">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
        {skills.map((s, i) => (
          <motion.span
            key={s.name}
            className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md ${
              colorMap[s.type]
            }`}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          >
            <span className="text-lg">{s.icon}</span>
            {s.name}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

}

// ====== PROJECTS ======
function ProjectCard({ p }) {
  return (
    <div className="bg-gray-900 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col w-full h-full">
      <div className="p-4 flex-grow">
        <h3 className="text-lg logo-font font-semibold text-white">
          {p.title}
        </h3>
        <p className="text-white text-sm mt-2">{p.desc}</p>
      </div>
      <div className="p-4 flex gap-2 mt-auto">
        <a
          href={p.live}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 bg-white text-gray-900 text-sm rounded hover:bg-gray-200"
        >
          Live
        </a>
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border border-white text-white text-sm rounded hover:bg-gray-700"
        >
          Code
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="pt-10 pb-24 bg-white text-gray-800 scroll-mt-20 border-b border-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl text-center font-bold mb-6 text-gray-900 logo-font">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="w-full sm:w-[400px] md:w-[420px] flex"
            >
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ====== CONTACT ======//
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xldwzqkp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-8 pb-24 bg-white text-gray-800 scroll-mt-20 border-white"
    >
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 logo-font">
          Contact
        </h2>
        <p className="mb-10 text-md sm:text-lg font-semibold text-gray-800">
          Let’s work together — drop me a message:
        </p>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-xl shadow-md border border-white text-left relative mb-8"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-100 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 font-semibold text-sm sm:text-md text-gray-900 rounded-lg transition mx-auto block ${
              loading
                ? "bg-white cursor-not-allowed"
                : "bg-white hover:bg-gray-300"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Sliding success message */}
          {submitted && (
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-toast">
              ✅ Message sent!
            </div>
          )}
        </form>
        {/* Contact links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${PERSON.email}`}
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gray-800 shadow-sm border border-gray-900 hover:shadow-md hover:bg-gray-700 transition mx-auto"
          >
            <Mail className="w-5 h-5 text-white" />
            <span className="font-medium text-white">{PERSON.email}</span>
          </a>

          <a
            href={PERSON.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gray-800 shadow-sm border border-gray-900 hover:shadow-md hover:bg-gray-700 transition mx-auto"
          >
            <Linkedin className="w-5 h-5 text-white" />
            <span className="font-medium text-white">LinkedIn</span>
          </a>

          <a
            href={PERSON.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gray-800 shadow-sm border border-gray-900 hover:shadow-md hover:bg-gray-700 transition mx-auto"
          >
            <Github className="w-5 h-5 text-white" />
            <span className="font-medium text-white">GitHub</span>
          </a>
        </div>
      </div>

      {/* Toast animation */}
      <style>{`
        @keyframes toast {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-toast {
          animation: toast 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

// ====== SCROLL TO TOP ======
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-20 right-6 p-3 rounded-full shadow-lg transition-all ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      } bg-gray-800 text-white hover:bg-gray-600`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}

// ====== FOOTER ======
function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} {PERSON.name}. All rights reserved.
      </div>
    </footer>
  );
}

// ====== MAIN APP ======
export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

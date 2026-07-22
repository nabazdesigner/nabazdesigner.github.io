'use client';
import DesktopNavbar from './components/pc/DesktopNavbar';
import MobileNavbar from './components/mobile/MobileNavbar';
import { motion } from 'framer-motion';
import { 
  FaTiktok, FaInstagram, FaSnapchat, FaDiscord, FaFacebook, FaYoutube,
  FaPenNib, FaCamera, FaVideo, FaShieldAlt, FaPalette,
  FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaUser 
} from 'react-icons/fa';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white w-full">
      {/* زیادکردنی sticky top-0 z-50 بۆ ئەو divـانەی کە ناوڤارەکان لەخۆ دەگرن */}
      <div className="block md:hidden sticky top-0 z-50">
        <MobileNavbar />
      </div>
      <div className="hidden md:block sticky top-0 z-50">
        <DesktopNavbar />
      </div>

      {/* Hero Section */}
{/* Hero Section */}
      <section id="home" className="w-full max-w-[1600px] 2xl:max-w-[99%] mx-auto pt-25 md:pt-12 px-6 lg:px-12 2xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">        
        {/* بەشی تێکست */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 flex-1 max-w-2xl">
          
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-black text-white md:ml-0 leading-none">NABAZ</h1>
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-black text-red-600 mb-2 md:mb-3 leading-[1]">DESIGNER</h1>
          
          <p className="text-gray-400 md:ml-2 text-lg md:text-lg lg:text-3xl mb-4 md:mb-4 leading-relaxed">
            Graphic Designer • Photographer<br/>
            Video Creator • Cyber Security
          </p>
          
          {/* دوگمەکان */}
          <div className="flex flex-row md:ml-2 justify-center items-center gap-4 mb-8">
            <button className="bg-red-600 text-white px-4 md:px-10 py-3.5 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-red-700 transition-all shadow-lg">
              VIEW PORTFOLIO
            </button>
            <button className="bg-transparent border border-gray-700 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-lg font-bold text-sm md:text-base hover:border-white transition-all">
              CONTACT ME
            </button>
          </div>

          {/* ئایکۆنەکان */}
          <div className="flex gap-3 md:ml-3 md:gap-4 justify-center lg:justify-start">
            {[
              { icon: <FaTiktok />, color: "text-white", href: "https://www.tiktok.com/@nabaz_designer?_r=1&_t=ZS-97uxNuslbQ0" },
              { icon: <FaInstagram />, color: "text-pink-500", href: "https://www.instagram.com/nabaz_designer?igsh=MTIwbWc5YzkzdHR0ag%3D%3D&utm_source=qr" },
              { icon: <FaSnapchat />, color: "text-yellow-400", href: "https://snapchat.com/add/nabaz_designer" },
              { icon: <FaDiscord />, color: "text-indigo-500", href: "https://discord.gg/wDAVRjEfP" },
              { icon: <FaFacebook />, color: "text-blue-600", href: "https://www.facebook.com/share/18jXCEVkd5/?mibextid=wwXIfr" },
              { icon: <FaYoutube />, color: "text-red-600", href: "http://www.youtube.com/@nabaz_designer" }
            ].map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-zinc-900 flex items-center justify-center text-base md:text-xl lg:text-2xl border border-white/5 hover:border-red-600/50 transition-all cursor-pointer"
              >
                <span className={item.color}>{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* وێنەی پڕۆفایل */}
        <div className="order-1 lg:order-2 w-56 h-56 md:w-72 md:h-72 lg:w-[450px] lg:h-[450px] rounded-full border-[3px] border-red-600 p-2 shadow-[0_0_50px_rgba(220,38,38,0.3)] overflow-hidden shrink-0 bg-zinc-900 flex items-center justify-center">
          <img src="/pro.png" alt="Nabaz" className="w-full h-full object-cover rounded-full" />
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-10 px-6 lg:px-12 2xl:px-32 w-full max-w-[1600px] 2xl:max-w-[99%] mx-auto">
        <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {[
            { icon: <FaPalette />, title: "GRAPHIC DESIGN", desc: "Logos, Branding, Posters, Social Media Design" },
            { icon: <FaCamera />, title: "PHOTOGRAPHY", desc: "Portrait, Event, Product Photography" },
            { icon: <FaVideo />, title: "VIDEO CREATOR", desc: "Video Editing, Motion Graphics" },
            { icon: <FaShieldAlt />, title: "CYBER SECURITY", desc: "Security Testing, Network Security" }
          ].map((item, index) => (
            <div key={index} className="bg-zinc-960 border border-white/10 p-4 lg:p-6 rounded-2xl flex flex-col items-center text-center hover:border-red-600 transition-all">
              <div className="text-red-600 text-2xl lg:text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xs lg:text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-gray-400 text-[10px] lg:text-sm leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Its's My Work */}
      <section id="work" className="py-10 px-6 lg:px-12 2xl:px-32 w-full max-w-[1600px] 2xl:max-w-[99%] mx-auto">
        <h2 className="text-red-600 text-2xl md:text-3xl font-bold mb-10 text-center">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { id: 1, title: "Logo Design", image: "/project1.JPG", desc: "" },
            { id: 2, title: "Social Media Post", image: "/project2.jpg", desc: "" },
            { id: 3, title: "Banner Design", image: "/project3.jpg", desc: "" },
          ].map((project) => (
            <div key={project.id} className="group bg-zinc-960 border border-white/10 rounded-2xl p-3 hover:border-red-600 transition-all flex flex-col items-center text-center">
              
              {/* شوێنی وێنەی پڕۆژە */}
              <div className="w-full aspect-[10/10] sm:aspect-[8/9] rounded-xl mb-4 overflow-hidden bg-zinc-800">
                <img
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-lg font-extrabold text-white mb-2">{project.title}</h3>
              <p className="text-zinc-400 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills and Contact */}
      <section className="my-12 px-6 lg:px-12 2xl:px-32 w-full max-w-[1600px] 2xl:max-w-[99%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="skills" className="bg-zinc-960 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-red-600 font-bold mb-5 text-sm">MY SKILLS</h2>
          <div className="space-y-4">
            {[ { name: "PHOTOSHOP", percent: "95%" }, { name: "ILLUSTRATOR", percent: "90%" }, { name: "LIGHTROOM", percent: "100%" } ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-xs text-gray-300 mb-1"><span>{skill.name}</span><span>{skill.percent}</span></div>
                <div className="h-1 bg-zinc-700 rounded-full"><div className="h-full bg-red-600 rounded-full" style={{ width: skill.percent }}></div></div>
              </div>
            ))}
          </div>
        </div>
        <div id="contact" className="bg-zinc-960 border border-white/10 p-6 rounded-2xl">
          <h2 className="text-red-600 font-bold mb-5 text-sm">CONTACT ME</h2>
          <div className="space-y-4 text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-3"><FaPhone className="text-red-600" /><span>+964 770 325 1919</span></div>
            <div className="flex items-center gap-3"><FaEnvelope className="text-red-600" /><span>nabazsarkawt78@gmail.com</span></div>
            <div className="flex items-center gap-3"><FaWhatsapp className="text-red-600" /><span>Chat on WhatsApp</span></div>
            <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-red-600" /><span>Kurdistan</span></div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-gray-500 text-xs md:text-sm">© 2026 Nabaz Designer. All rights reserved.</p>
      </footer>
    </main>
  );
}
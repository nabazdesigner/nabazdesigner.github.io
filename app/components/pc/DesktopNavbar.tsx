export default function DesktopNavbar() {
  return (
    <nav className="w-full px-6 md:px-12 py-6 bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="w-full flex justify-between items-center text-white">
        
        <div className="font-black text-white text-2xl tracking-tighter whitespace-nowrap">
          Nabaz&nbsp;<span className="text-red-600">Designer</span>
        </div>

        <ul className="flex items-center gap-6 md:gap-10 font-bold whitespace-nowrap">
          <li>
            <a href="#home" className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">About</a>
          </li>
          <li>
            <a href="#work" className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">Work</a>
          </li>
          <li>
            <a href="#skills" className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">Skills</a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer hover:text-red-600 active:text-red-600 focus:text-red-600 transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
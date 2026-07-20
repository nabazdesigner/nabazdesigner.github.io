export default function DesktopNavbar() {
  return (
    // لێرە container mx-auto لابرا بۆ ئەوەی پڕ بە شاشە بێت
    // پاشان px-20 زیادکرا بۆ ئەوەی لۆگۆ و لینکەکان لە پەراوێزەکانەوە دوور بن
    <nav className="w-full px-6 lg:px-20 py-6 bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      
      {/* لێرە justify-between کار دەکات بۆ ئەوەی بەشەکان لە یەک دوور بکەونەوە */}
      <div className="flex justify-between items-center text-white">
        
        <div className="font-black text-white text-2xl tracking-tighter">
          Nabaz&nbsp;<span className="text-red-600">Designer</span>
        </div>

        {/* لێرە gap-8 کراوە بە lg:gap-12 تا لینکەکان لە PC دوورتر بن */}
        <ul className="flex items-center gap-6 lg:gap-12 font-medium">
          <li className="cursor-pointer hover:text-red-600 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-red-600 transition-colors">About</li>
          <li className="cursor-pointer hover:text-red-600 transition-colors">Projects</li>
          <li className="cursor-pointer hover:text-red-600 transition-colors">Services</li>
          <li className="cursor-pointer hover:text-red-600 transition-colors">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
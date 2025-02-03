import React from "react";
import { Home, PlayCircle, Search, Download, Menu } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home" },
    { icon: PlayCircle, label: "New & Hot" },
    { icon: Search, label: "Search" },
    { icon: Download, label: "Downloads" },
    { icon: Menu, label: "More" },
  ];

  return (
    <div className="hidden sm:block fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
      <nav className="max-w-screen-xl mx-auto">
        <ul className="flex justify-between items-center px-4 py-2">
          {navItems.map((item) => (
            <li key={item.label} className="flex flex-col items-center">
              <button
                className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors"
                onClick={() => console.log(`Clicked ${item.label}`)}
              >
                <item.icon size={24} />
                <span className="text-xs">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;

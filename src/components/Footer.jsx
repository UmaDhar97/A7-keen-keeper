import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a32] text-white pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* --- MAIN BRANDING --- */}
        <h2 className="text-6xl font-bold mb-6 tracking-tight">
          KeenKeeper
        </h2>
        
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* --- SOCIAL SECTION --- */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-6">Social Links</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1a3a32] hover:bg-gray-200 transition-colors">
             <FaInstagram size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1a3a32] hover:bg-gray-200 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1a3a32] hover:bg-gray-200 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
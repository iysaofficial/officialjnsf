import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { usePendaftaran } from "../../lib/pendaftaran";

const NavLinks = () => {
  // Buku panduan edisi berjalan + menu pendaftaran mengikuti dasbor IYSA.
  const { identitas, keadaan, guidebook } = usePendaftaran();
  const [isGuideBookOpen, setIsGuideBookOpen] = useState(false);

  return (
    <>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        smooth
        to="/#hero"
      >
        Utama
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        smooth
        to="/#about"
      >
        Tentang
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        to="/Faq"
      >
        Faq
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        to="/ListofWinner"
      >
        Daftar Pemenang
      </HashLink>
      <a
        href="/Kurasipage"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        smooth
      >
        Kurasi
      </a>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        to="/CertificateSupervisor"
      >
        Certificate
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        to="/Mediacoverage"
      >
        Media Coverage
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        to="/Gallery"
      >
        Galeri
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        to="/contact#contact"
      >
        Kontak
      </HashLink>

      {keadaan === "buka" && (
        <HashLink
          className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
          to="/homeindo"
        >
          Pendaftaran
        </HashLink>
      )}

      <div 
        className="relative inline-block"
        onMouseEnter={() => setIsGuideBookOpen(true)}
        onMouseLeave={() => setIsGuideBookOpen(false)}
      >
        <button 
          className="px-4 font-extrabold text-gray-500 hover:text-[#101084] inline-flex items-center"
          onClick={() => setIsGuideBookOpen(!isGuideBookOpen)}
        >
          Buku Panduan
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isGuideBookOpen && (
          <div className="lg:absolute relative left-0 mt-2 bg-white text-gray-500 lg:shadow-lg rounded-md min-w-[120px] z-50 flex flex-col border lg:border-none">
            {guidebook && (
              <>
                <a href={guidebook.url} target="_blank" rel="noopener noreferrer" data-iysa-panduan="JNSF" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#101084] font-extrabold" role="menuitem">{identitas?.tahun ?? "Buku Panduan"}</a>
                <a href={guidebook.url} target="_blank" rel="noopener noreferrer" data-iysa-panduan="JNSF" data-iysa-panduan-jenis="tnc" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#101084] font-extrabold" role="menuitem">Syarat &amp; Ketentuan</a>
              </>
            )}
            {identitas?.tahun !== "2026" && <a href="https://drive.google.com/file/d/14ihYGHgxRUBGsVjuAwyPAXUrRzGGBql8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#101084] rounded-t-md font-extrabold">2026</a>}
            <a href="https://drive.google.com/file/d/1IsZw9esQLLh8OYR7-0uK6b0R8T8SmLGs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#101084] font-extrabold">2025</a>
            <a href="https://drive.google.com/file/d/16DyTlLzNwJEc4HTXIzcvoCVLXP5hHMyl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#101084] font-extrabold">2024</a>
            {/* <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#101084] rounded-b-md font-extrabold">2023</a> */}
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;

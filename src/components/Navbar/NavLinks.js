import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
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
      <a
        href="https://drive.google.com/file/d/1ceYrbWn0jfjXm6yboRRxBc_pX99aXeTQ/view?usp=sharing"
        target="_blank"
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        smooth
      >
        Press Release
      </a>
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
        List of Winner
      </HashLink>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        to="/CertificateSupervisor"
      >
        Certificate
      </HashLink>
      <a
        href="https://drive.google.com/drive/folders/1QGL9JxavpwplBKO-NNhHrDg3wjPaGBUG?usp=sharing"
        target="_blank"
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        smooth
      >
        Galeri
      </a>
      <HashLink
        className="px-4 font-extrabold text-gray-500 hover:text-[#101084]"
        to="/contact#contact"
      >
        Kontak
      </HashLink>

      <a
        href="https://drive.google.com/file/d/16DyTlLzNwJEc4HTXIzcvoCVLXP5hHMyl/view?usp=sharing"
        target="_blank"
        className="text-white bg-[#101084] hover:bg-blue-900 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
      >
        Buku Panduan
      </a>
    </>
  );
};

export default NavLinks;

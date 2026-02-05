import Navigation from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer";
import { indonesiaOnlineTerms, indonesiaOfflineTerms } from "../../pages/data/terms";
import { useState } from "react";
import "./registration.css";


function HomeIndo() {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [redirectLink, setRedirectLink] = useState("");
  const [termsContent, setTermsContent] = useState("");
  const [hasViewedTerms, setHasViewedTerms] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpenModal = (link, terms) => {
    setRedirectLink(link); // Set link tujuan redirect
    setTermsContent(terms); // Set isi terms sesuai pilihan
    setTermsAccepted(false); // Reset state persetujuan
    setHasViewedTerms(false); // Reset state sudah melihat
    setShowModal(true); // Tampilkan modal
  };

  const handleViewTerms = () => {
    window.open("https://drive.google.com/file/d/1KOtyI8EZO42INO4Q_IeiTmBQCc_8JtTl/view?usp=sharing", "_blank");
    setHasViewedTerms(true);
  };

  const handleAccept = () => {
    if (termsAccepted) {
      sessionStorage.setItem("termsAccepted", "true"); // Menyimpan status setuju di sessionStorage
      setShowModal(false);
      window.location.href = redirectLink;
    } else {
      alert("Harap setujui Syarat & Ketentuan untuk melanjutkan.");
    }
  };

  return (
    <>
    <Navigation />
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                FORMULIR REGISTRASI
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Pilih Kategori Kompetisi untuk Registrasi JNSF 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a
              href="#!"
              role="button"
              className="btn btn-custom text-center me-lg-5 "
              onClick={(e) => { e.preventDefault(); handleOpenModal("/indo-online", indonesiaOnlineTerms); }}
            >
              Kompetisi Online<i className="fa-solid fa-earth-americas"></i>
            </a>
            <a
              href="#!"
              role="button"
              className="btn btn-custom text-center me-lg-5 "
              onClick={(e) => { e.preventDefault(); handleOpenModal("/indo-offline", indonesiaOfflineTerms); }}
            >
              Kompetisi Offline<i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Modal untuk Terms & Conditions */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Syarat & Ketentuan</h2>
              <button onClick={() => setShowModal(false)} className="modal-close-btn">&times;</button>
            </div>
            <div className="modal-body">
              {termsContent}
              <p>
                Harap tinjau syarat dan ketentuan dengan cermat sebelum melanjutkan.
              </p>
            </div>
            <div className="modal-footer">
              <div className="terms-agreement">
                <div
                  className="checkbox-wrapper"
                  onMouseEnter={() => !hasViewedTerms && setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => !hasViewedTerms && setShowTooltip(!showTooltip)}
                >
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    disabled={!hasViewedTerms}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  {showTooltip && (
                    <div className="custom-tooltip">
                      Harap lihat tautan Syarat & Ketentuan terlebih dahulu
                    </div>
                  )}
                </div>
                <label htmlFor="terms">
                  Saya telah membaca dan menyetujui{" "}
                  <a href="#!" role="button" onClick={(e) => { e.preventDefault(); handleViewTerms(); }}>
                    Syarat & Ketentuan
                  </a>.
                </label>
              </div>
              <div className="modal-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Batal
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleAccept}
                  disabled={!termsAccepted}
                >
                  Terima & Lanjutkan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default HomeIndo;

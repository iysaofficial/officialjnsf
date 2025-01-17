import Navigation from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer';



function HomeRegist() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <div className="divider"></div>
        <h1>Registration</h1>
        <a href="/">Home</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-2xl">FORMULIR PENDAFTARAN</h1>
              <h3 className="mx-auto mt-5 mb-2">
                Formulir registrasi untuk JNSF 2025
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <a href="/homeindo" className="btn btn-action text-center me-lg-5">
              Indonesia Participant{" "}
              <i className="fa-solid fa-earth-americas"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;

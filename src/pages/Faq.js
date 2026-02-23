import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import FaqItem from "../components/FaqItem";

const Faq = () => {
  return (
    <>
      <NavBar />

      <div className="flex justify-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          <h1 className="text-center mb-5 font-bold text-6xl">Faq</h1>

          <h2 className="text-center mb-6 font-bold text-4xl">
            Setelah Pendaftaran
          </h2>

          <FaqItem
            question="Minsa, kapan kami akan mendapatkan LoA dan Faktur kami?"
            answer="Panitia akan mengirimkan LoA dan Invoice paling lambat 3 hari kerja setelah Anda mendaftar. LoA dan Invoice dikirim ke email ketua tim."
          />

          <FaqItem
            question="Saya sudah mendaftar seminggu lalu tapi belum menerima LoA?"
            answer="Silakan periksa folder spam. Jika belum ada, hubungi panitia melalui kontak resmi."
          />

          <FaqItem
            question="Di mana saya harus mengunggah file kompetisi?"
            answer="Unggah file ke Google Drive yang tercantum di LoA Anda."
          />

          <FaqItem
            question="Saya ingin membayar biaya pendaftaran, tetapi mengapa saya tidak bisa menemukan fakturnya? Dan ke mana pembayaran ditransfer?"
            answer="Ayo, sudahkah kamu membaca LoA sampai selesai? Karena kami akan mengirimkan faktur bersama LoA timmu, pastikan kamu telah membaca email dari kami sampai selesai! Untuk pembayaran, kamu dapat mentransfer ke rekening yang tertera di faktur. Pastikan kamu membayar sesuai dengan nominal yang tertera di faktur, ya!."
          />

          <FaqItem
            question="Minsa, saya sudah membayar biaya pendaftaran. Di mana saya bisa mengunggah bukti pembayarannya?"
            answer="Jika Anda telah melakukan pembayaran, Anda dapat mengunggah bukti pembayaran ke tautan yang tercantum pada faktur, dan pastikan Anda mengisi dan mengunggah bukti transfer dengan benar agar komite dapat mencatatnya dengan benar pula."
          />

          <FaqItem
            question="Kapan bukti pembayaran akan dikirimkan kepada kami?"
            answer="Kami akan mengirimkan bukti pembayaran dalam waktu maksimal 7 hari kerja ke alamat email pemimpin tim, setelah Anda mengunggah bukti pembayaran!"
          />

          <h2 className="text-center mt-12 mb-6 font-bold text-4xl">
            Selama Acara
          </h2>

          <FaqItem
            question="Kapan jadwal presentasi diberikan?"
            answer="Jadwal presentasi akan dikirim paling lambat 2 hari sebelum penjurian melalui grup WhatsApp dan email."
          />

          <FaqItem
            question="Aplikasi apa yang digunakan untuk presentasi online?"
            answer="Kami menggunakan Zoom untuk seluruh sesi presentasi online."
          />

          <FaqItem
            question="Kapan tautan Zoom akan diberikan oleh panitia?"
            answer="Kami akan menyediakan tautan Zoom pada hari penilaian, dan kami akan mengirimkannya secara berkala ke grup sesuai dengan waktu presentasi tim Anda."
          />

          <FaqItem
            question="Berapa lama peserta akan melakukan presentasi?"
            answer="Anda akan diberikan waktu 15 menit untuk satu sesi presentasi yang akan dibagi menjadi dua bagian, yaitu 7 menit pertama untuk presentasi dan 8 menit terakhir untuk sesi tanya jawab dengan juri."
          />

          <FaqItem
            question="Berapa banyak juri yang akan datang ke booth peserta offline?"
            answer="Sama seperti penilaian online, akan ada 2 juri yang menilai setiap tim. Setelah dinilai, Anda akan diberikan stiker sebagai tanda bahwa booth Anda telah dinilai, pastikan Anda mendapatkan 2 stiker."
          />

          <h2 className="text-center mt-12 mb-6 font-bold text-4xl">
            Setelah Acara
          </h2>

          <FaqItem
            question="Kapan pemenang diumumkan?"
            answer="Pemenang diumumkan pada hari terakhir acara sesuai jadwal resmi."
          />

          <FaqItem
            question="Di mana kita bisa melihat hasil pemenang?"
            answer="Anda dapat memeriksa hasil akhir di situs web resmi acara yang Anda ikuti."
          />

          <FaqItem
            question="Kapan sertifikat dikirim?"
            answer="Sertifikat akan dikirim maksimal 1 bulan setelah pengumuman pemenang."
          />

          <FaqItem
            question="Di mana kita bisa mendapatkan sertifikat supervisor?"
            answer="Anda dapat melihat dan mengunduh sertifikat supervisor di situs web resmi acara yang Anda ikuti."
          />

          <FaqItem
            question="Bagaimana cara melakukan penggandaan medali?"
            answer="Bagi peserta offline, Anda dapat langsung menduplikasi
medali di tempat setelah pengumuman pemenang dilakukan. Dan bagi peserta online, Anda dapat menduplikasi medali melalui tautan yang kami kirim di grup WhatsApp. Kami akan mengirim informasi duplikat di grup WhatsApp paling lambat 2 hari setelah pengumuman pemenang."
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;
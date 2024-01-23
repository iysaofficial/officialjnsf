import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Faq = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        id="demo"
        className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24"
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          <h1 className="text-center mb-5 font-bold text-6xl">Faq</h1>
          <h1 className="text-center mt-5 mb-2 font-bold text-4xl">
            Setelah Pendaftaran
          </h1>
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-100 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>
                  Minsa, kapan kami akan mendapatkan LoA dan Faktur
                  kami? Di mana itu dikirim?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Panitia akan mengirimkan LoA dan Invoice paling
                  lambat dari 3 hari kerja setelah Anda mendaftar.
                  Kami akan mengirimkan LoA dan Invoice ke email ketua
                  tim, jadi pastikan Anda menyertakan email yang valid
                  dan benar yang valid dan benar!
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span>
                  Minsa, saya sudah mendaftar seminggu yang lalu tapi
                  kenapa saya belum menerima LoA dan Invoice?.
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Coba periksa folder spam di email pemimpin tim Anda
                  Anda, mungkin email dari tim IYSA akan masuk ke
                  folder spam
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span>
                  Di mana saya harus mengunggah file kompetisi, Minsa?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Unggah file yang diminta oleh panitia ke Tautan
                  Google Drive yang telah kami sertakan dalam LoA
                  Anda, pastikan Anda membaca LoA dengan seksama, ya!
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-5"
              >
                <span>
                  Saya ingin membayar biaya pendaftaran tapi kenapa
                  saya tidak dapat menemukan invoice? dan kemana
                  pembayarannya ditransfer?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Ayo, apakah Anda sudah membaca LoA sampai selesai?
                  Karena kami akan mengirimkan invoice dengan LoA tim
                  Anda, pastikan pastikan Anda sudah membaca email
                  dari kami sampai selesai! Untuk pembayaran, Anda
                  bisa transfer ke rekening yang tertera di yang
                  tertera pada invoice. Pastikan Anda membayar sesuai
                  dengan nominal yang tertera di invoice, ya!.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-6">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-6"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-6"
              >
                <span>
                  Minsa, saya sudah membayar biaya pendaftaran. Di
                  mana saya bisa mengunggah bukti pembayaran?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-6"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-6"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Jika Anda telah melakukan pembayaran, Anda dapat
                  mengunggah bukti ke tautan yang tertera di faktur,
                  dan pastikan Anda mengisi dan mengunggah bukti
                  transfer dengan benar agar panitia dapat mencatatnya
                  dengan benar juga.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-6">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-6"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-6"
              >
                <span>
                  Kapan tanda terima akan dikirimkan kepada kami?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-6"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-6"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Kami akan mengirimkan tanda terima pembayaran dalam
                  waktu maksimal 7 hari kerja ke email ketua tim,
                  setelah Anda telah mengunggah bukti pembayaran!
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-7">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-7"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-7"
              >
                <span>
                  Minsa, satu minggu lagi untuk penjurian, kenapa saya
                  belum menerima jadwal presentasi tim saya?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-7"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-7"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Kami akan mengirimkan presentasi peserta secara
                  online paling lambat 2 hari sebelum penjurian
                  berlangsung ke grup whatsapp dan juga email tim dan
                  juga email pimpinan tim. Pastikan Anda rajin
                  mengecek informasi yang kami berikan di grup
                  Whatsapp dan juga email!
                </p>
              </div>
            </div>
          </div>

          {/* faq 2 */}

          <div
            className="mt-5"
            id="accordion-collapses"
            data-accordion="collapses"
          >
            <h1 className="text-center mb-2 mt-5 font-bold text-4xl">
              Selama Acara
            </h1>
            <h2 id="accordion-collapse-headings-8">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-8"
                aria-expanded="true"
                aria-controls="accordion-collapse-bodys-8"
              >
                <span>
                  Kapan jadwal presentasi akan diberikan oleh panitia?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-8"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-8"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Kami akan memberikan jadwal presentasi
                  selambat-lambatnya paling lambat 2 hari sebelum
                  penjurian berlangsung atau bisa juga lebih awal, dan
                  akan kami kirimkan melalui grup WA grup dan juga
                  email ketua tim.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-9">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-9"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-9"
              >
                <span>
                  Aplikasi apa yang digunakan untuk presentasi online?
                  Zoom, Google Meet atau yang lainnya?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-9"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-9"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Untuk penjurian online, kami selalu menggunakan
                  aplikasi Zoom dan pastikan aplikasi Zoom Anda sudah
                  terbaru.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-10">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-10"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-10"
              >
                <span>
                  Kapan tautan zoom akan diberikan oleh panitia?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-10"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-10"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Kami akan memberikan tautan Zoom pada hari
                  penjurian, dan kami akan mengirimkannya secara
                  berkala ke grup sesuai dengan waktu presentasi tim
                  Anda.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-11">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-11"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-11"
              >
                <span>
                  kami akan memberikan tautan Zoom pada hari
                  penjurian, dan kami akan mengirimkannya secara
                  berkala ke grup sesuai dengan waktu presentasi tim
                  Anda
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-11"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-11"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Anda dapat masuk ke Zoom dengan maksimal 5 akun
                  untuk peserta, dan semua akun Zoom harus mengikuti
                  format nama mengikuti format nama yang telah kami
                  sediakan, yaitu "Ruang Nomor_Nama Ketua Tim_Nama
                  Institusi"
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-12">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-12"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-12"
              >
                <span>
                  berapa lama para peserta akan membuat presentasi?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-12"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-12 "
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Anda akan diberikan waktu 15 menit untuk 1 kali
                  presentasi yang akan dibagi menjadi 2, yaitu sesi 7
                  menit awal untuk presentasi dan 8 menit untuk sesi
                  tanya jawab dengan dewan juri
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-13">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-13"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-13"
              >
                <span>
                  Berapa banyak juri yang akan datang ke stan stan
                  peserta offline?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-13"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-13"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Sama seperti penjurian online, akan ada 2 juri yang
                  akan menilai setiap tim. Dan setelah dinilai, Anda
                  akan akan diberikan stiker sebagai tanda bahwa booth
                  kalian telah telah dinilai, pastikan Anda
                  mendapatkan 2 stiker
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headings-14">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodys-14"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodys-14"
              >
                <span>
                  Dapatkah kami merapikan stan kami setelah dinilai?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodys-14"
              class="hidden"
              aria-labelledby="accordion-collapse-headings-14"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Anda dapat mulai merapikan stan ketika semua tim
                  telah selesai dinilai, jadi jika Anda telah selesai
                  menilai, Anda dapat mengunjungi stan peserta lain
                  peserta lain terlebih dahulu
                </p>
              </div>
            </div>
          </div>

          {/* Faq 3 */}

          <div
            className="mt-5"
            id="accordion-collapsese"
            data-accordion="collapsese"
          >
            <h1 className="text-center mb-2 font-bold text-4xl">
              Setelah Acara
            </h1>
            <h2 id="accordion-collapse-headingse-15">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-15"
                aria-expanded="true"
                aria-controls="accordion-collapse-bodyse-15"
              >
                <span>Kapan pemenang akan diumumkan?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-15"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-15"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Pengumuman pemenang akan dilakukan pada hari
                  terakhir setiap acara, Anda dapat mengecek
                  tanggalnya pada jadwal yang yang tertera pada Buku
                  Panduan.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headingse-16">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-16"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodyse-16"
              >
                <span>
                  Di mana kita bisa melihat hasil kemenangan?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-16"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-16"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Anda dapat memeriksa hasil akhir di situs web resmi
                  resmi dari acara yang Anda ikuti.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headingse-17">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-17"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodyse-17"
              >
                <span>
                  Kapan sertifikat elektronik akan dikirimkan?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-17"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-17"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  IYSA TIDAK mengirimkan E-Sertifikat kepada peserta
                  Nasional peserta Nasional atau Peserta Indonesia
                  yang mengikuti ambil bagian dalam acara online.
                  Peserta Nasional secara online hanya akan menerima
                  sertifikat dalam bentuk cetak/keras yang nantinya
                  akan dikirimkan bersama dengan medali melalui
                  ekspedisi JNE.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headingse-18">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-18"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodyse-18"
              >
                <span>
                  Kapan pengiriman sertifikat peserta secara online
                  sertifikat peserta secara online?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-18"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-18"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Sertifikat akan dikirimkan selambat-lambatnya satu
                  bulan setelah pengumuman pemenang. Anda dapat secara
                  berkala memeriksa resi pengiriman yang kami kirimkan
                  di grup Whatsapp apakah sertifikat Anda sudah sudah
                  dikirim atau belum.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-headingse-19">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-bodyse-19"
                aria-expanded="false"
                aria-controls="accordion-collapse-bodyse-19"
              >
                <span>
                  Di mana kami bisa mendapatkan sertifikat supervisor?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-bodyse-19"
              class="hidden"
              aria-labelledby="accordion-collapse-headingse-19"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Anda dapat melihat dan mengunduh sertifikat pengawas
                  di situs web resmi acara yang Anda Anda ikuti.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-14">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-100 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-whitesmoke gap-3"
                data-accordion-target="#accordion-collapse-body-14"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-14"
              >
                <span>
                  Bagaimana cara melakukan penggandaan medali?
                </span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-14"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-14"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Untuk peserta luring, Anda dapat langsung
                  menggandakan medali di tempat setelah setelah
                  pengumuman pemenang berlangsung. Dan untuk peserta
                  online, Anda dapat menggandakan medali melalui
                  tautan yang kami kirimkan di grup Whatsapp, kami
                  akan akan mengirimkan informasi duplikat di grup
                  Whatsapp selambat-lambatnya paling lambat 2 hari
                  setelah pengumuman pemenang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;

import React, { useEffect } from "react"; // Impor useEffect
import aboutImage from "./images/lte_7.jpg";
import "./styles/About.css";
import $ from "jquery"; // Impor jQuery

const About = () => {
  useEffect(() => {
    // Tambahkan efek hover menggunakan jQuery setelah komponen dirender
    $("#aboutMePhoto").hover(
      function () {
        // Efek saat kursor masuk ke gambar
        $(this).css({
          transform: "scale(1.1)", // Perbesar gambar
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)", // Tambahkan bayangan
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animasi transisi
        });

        // Efek pada kontainer
        $(".about-me-container").css({
          transform: "scale(1.02)", // Perbesar kontainer sedikit
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)", // Tambahkan bayangan
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animasi transisi
        });
      },
      function () {
        // Efek saat kursor keluar dari gambar
        $(this).css({
          transform: "scale(1)", // Kembali ke ukuran semula
          boxShadow: "none", // Hapus bayangan
        });

        // Kembalikan kontainer ke ukuran semula
        $(".about-me-container").css({
          transform: "scale(1)", // Kembali ke ukuran semula
          boxShadow: "none", // Hapus bayangan
        });
      }
    );

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      $("#aboutMePhoto").off("hover");
    };
  }, []); // Array kosong memastikan efek dijalankan sekali

  return (
    <div className="about-me-container">
      {/* Deskripsi About Me */}
      <div className="about-me-box about-me-description">
        <h2>About Me</h2>
        <p>
          Hi, I am Madinatul Inadila. I am an active student at one of the
          campuses in Yogyakarta, namely Aisyiyah University Yogyakarta majoring
          in information technology. I am also active in the campus activity
          unit, namely Aisyiyah English Club as public relations. I come from
          Blitar East Java but now I live in Yogyakarta. I am able to work
          independently and in teams. I have 3 years of teamwork experience as
          data entry.
        </p>
      </div>

      {/* Gambar About Me */}
      <div className="about-me-box about-me-image">
        <img
          src={aboutImage}
          alt="About Me"
          className="about-me-photo"
          id="aboutMePhoto" // Tambahkan ID untuk seleksi di jQuery
        />
      </div>
    </div>
  );
};

export default About;

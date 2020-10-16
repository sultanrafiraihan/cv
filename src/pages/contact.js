import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './css/contact.css';

function Contact() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello</title>
      </Helmet>
      <div className="Kontak">
        <div className="col-lg">
          <p>alamat : </p>
          <p>
            Perumahan Permata Regensi Blok I2/12A, Desa Wanasari, Kecamatan
            Cibitung, Kabupaten Bekasi – 17520
          </p>
        </div>
        <div className="col-lg">
          <p>telepon :</p>
          <p>085972930234 / 081292988158</p>
        </div>
        <div className="col-lg">
          <p>email :</p>
          <p>sultanrafi21@gmail.com</p>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Contact;

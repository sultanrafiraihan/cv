import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { UserContext } from '../userContext';
import './css/contact.css';

export function Contact() {
  const { value, setValue } = useContext(UserContext);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="Kontak">
        <div className="container">
          <div className="col-lg">
            <div>
              <h3>Pengguna</h3>
              <div>{value}</div>
            </div>
          </div>
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
      </div>
    </HelmetProvider>
  );
}

export default Contact;

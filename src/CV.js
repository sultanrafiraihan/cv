import React, { useState } from 'react';
import Modal from 'react-modal';
import './CV.css';

function CV() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="CV">
      <button on onClick={() => setModalIsOpen(true)}>
        Open CV
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="container">
          <h2>curriculum vitae</h2>
          <div className="col-lg">
            <p>nama : </p>
            <p>sultan rafi raihan</p>
          </div>
          <div className="col-lg">
            <p>tempat, tanggal lahir : </p>
            <p>jakarta, 9 april 1999</p>
          </div>
          <div className="col-lg">
            <p>jenis kelamin : </p>
            <p>laki - laki</p>
          </div>
          <div className="col-lg">
            <p>agama : </p>
            <p>islam</p>
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
          <div>
            <button onClick={() => setModalIsOpen(false)}>close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CV;

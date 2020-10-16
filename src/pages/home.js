import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './css/home.css';

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Hello</title>
      </Helmet>
      <div className="CV">
        <body>
          <div className="container">
            <h2>Curriculum Vitae</h2>
            <div className="oke">
              <h4>introduction</h4>
            </div>
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
              <p>Kewarganegaraan : </p>
              <p>indonesia</p>
            </div>
          </div>
        </body>
      </div>
    </HelmetProvider>
  );
}

export default Home;

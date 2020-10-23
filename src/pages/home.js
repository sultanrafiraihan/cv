import React, { useContext, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { UserContext } from '../userContext';
import './css/home.css';

export function Home() {
  const { value, setValue } = useContext(UserContext);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [office, setOffice] = useState(0);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="CV">
        <body>
          <div className="container">
            <h2>Curriculum Vitae</h2>
            <div className="oke">
              <h4>Nama Pengguna</h4>
              <div>{value}</div>
              <button onClick={() => setValue('Sultan')}>Tampilkan</button>
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
            <div className="col-lg">
              <div>
                <button
                  className="skill"
                  onClick={() => {
                    setHtml(50);
                    setCss(50);
                    setJs(40);
                    setOffice(70);
                  }}
                >
                  Tampilkan
                </button>
              </div>
              <p>Kemampuan : </p>
            </div>
            <div className="col-lg">
              <p>
                <div>HTML : {html}%</div>
              </p>
            </div>
            <div className="col-lg">
              <p>
                <div>CSS : {css}%</div>
              </p>
            </div>
            <div className="col-lg">
              <p>
                <div>JS : {js}%</div>
              </p>
            </div>
            <div className="col-lg">
              <p>
                <div>OFFICE : {office}%</div>
              </p>
            </div>
          </div>
        </body>
      </div>
    </HelmetProvider>
  );
}

export default Home;

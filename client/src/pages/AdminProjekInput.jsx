import React from 'react';

import '../styles/AdminProfile.css';
import useProjek from '../controller/ProjekController';
import Footer from '../components/Footer';

function AdminProjekInput() {

  const {
     API,
    judul,setJudul,
    text,setText,
    gambar,setGambar,
    nama_link,setNama_Link,
    masukan_link,setMasukan_Link,
    submitHandler
    
  } = useProjek();

  return (
    <>
      

      <div className="page-container">
        <div className="card-form-wrapper">

          <h2 className="card-title">Cread Projek</h2>
          <p className="card-description">Update judul, deskripsi, dan gambar halaman utama.</p>

          

            <div className="form-group">
              <label>Judul</label>
              <input 
                type="text"

                className="form-control"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                 placeholder="Masukan Judul"
              />
            </div>

            <div className="form-group">
              <label>Deskripsi</label>
              <textarea 
                className="form-control"
                rows="4"
                value={text}
                onChange={(e) => setText(e.target.value)}
                 placeholder="Masukan Keterangan"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Nama Link</label>
              <textarea 
                className="form-control"
                rows="4"
                value={nama_link}
                onChange={(e) => setNama_Link(e.target.value)}
                placeholder="Masukan Nama Tombol"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Masukkan Link</label>
              <textarea 
                className="form-control"
                rows="4"
                value={masukan_link}
                onChange={(e) => setMasukan_Link(e.target.value)}
                placeholder="Masukan Link Yang Akan Dituju"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Gambar</label>

              <div className={`file-drop-area ${gambar ? "is-file-selected" : ""}`}>
                
                <label className="drop-zone-label">

                  {/* PREVIEW GAMBAR */}
                  {gambar ? (
                    <div className="image-preview-wrapper">
                      <img 
                        src={
                          typeof gambar === "string"
                        ? `${API}${gambar}`
                        : URL.createObjectURL(gambar)
                        }
                        className="uploaded-image"
                      />

                      <button 
                        className="remove-image-btn"
                        type="button"
                        onClick={() => setGambar(null)}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="drop-text"> Klik untuk upload</p>
                      <p className="placeholder-text">Format: JPG, PNG</p>
                    </>
                  )}

                  <input 
                    type="file"
                    className="file-upload-input"
                    onChange={(e) => setGambar(e.target.files[0])}
                  />

                </label>
              </div>
            </div>

            <div className="button-group">
              <button className="btn btn-submit" type="button" onClick={submitHandler}>Simpan</button>
              <button className="btn btn-submit" type="button" onClick={() => window.location.href = "/adminprojek"} >Batal</button>
            </div>

          

        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminProjekInput;

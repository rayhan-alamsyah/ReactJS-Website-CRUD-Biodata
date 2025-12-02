import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import '../styles/AdminProfile.css';
import useProfil from '../controller/ProfilController';
import Footer from '../components/Footer';

function AdminProfile() {

  const {
    API,
    profil,
    judul, setJudul,
    text, setText,
    gambar, setGambar,
    submitHandler,
    
  } = useProfil();

  return (
    <>
      <AdminNavbar />

      <div className="page-container">
        <div className="card-form-wrapper">

          <h2 className="card-title">Edit Profil</h2>
          <p className="card-description">Update judul, deskripsi, dan gambar halaman utama.</p>

          <form onSubmit={submitHandler}>

            <div className="form-group">
              <label>Judul</label>
              <input 
                className="form-control"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Deskripsi</label>
              <textarea 
                className="form-control"
                rows="4"
                value={text}
                onChange={(e) => setText(e.target.value)}
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
              <button className="btn btn-submit" type="submit">Simpan</button>
              <button className="btn btn-submit" type="button" onClick={() => window.location.href = "/adminprojek"} >Batal</button>
            </div>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminProfile;

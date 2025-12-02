import React from 'react'
import useProjek from '../controller/ProjekController'
import '../styles/Projek.css'


function ProjekView() {

  const {projek,API} = useProjek();

  return (
    
    
  <div>
    <div className="projek-wrapper">
      <section id="judul-projek">
       
            <h1 className='projek-title'>Projek</h1>
          
      </section>

     
        <div className="project-container">
          {projek.length !== 0 ? (
            projek.map(projek => (
              <section className="project-card">
                <div className="kolom">
                  <h2>{projek.judul}</h2>
                  <p style={{ whiteSpace: "pre-line" }}>{projek.text}</p>

                  <p>
                    <a href={projek.masukan_link} className="tbl-biru">
                      {projek.nama_link}
                    </a>
                  </p>
                </div>

                <img
                  className="project-image"
                  src={`${API}${projek.gambar}`}
                  alt={projek.judul}
                />
              </section>
            ))
          ) : (
            <p>tidak ada projek</p>
          )}
        </div>

      
    </div>
  </div>
    
  )
}

export default ProjekView

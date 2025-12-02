import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import Footer from '../components/Footer'
import useProfil from '../controller/ProfilController'
import ProjekView from './ProjekView'

function Home() {
  const {profil,API} = useProfil();
  
  
  return (
    <>
    <Navbar/>
    <div className="wrapper">
        <section id="home">
            <img src={profil[0] ? `${API}${profil[0].gambar}` : ""}/>
            <div className="kolom">
                
                <h2>{profil?.[0]?.judul}</h2>
                <p style={{ whiteSpace: "pre-line" }}>{profil?.[0]?.text}</p>
                <p><a href="" className="tbl-pink">Pelajari Lebih Lanjut</a></p>
            </div>
        </section>
        <ProjekView/>
      </div>
    <Footer/>
    </>
  )
}

export default Home

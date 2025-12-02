import { useState, useEffect } from 'react';
import axios from 'axios';

function useProfil(){
    const [profil,setProfil] = useState([]);
    const API = "http://localhost:3000";
    const [judul,setJudul] = useState("");
    const [text,setText] = useState("");
    const [gambar,setGambar] = useState(null);
    
    
    const getProfil = () => {
      axios ({
        method: 'GET',
        url: `${API}/profil`
      })
      .then(result =>{
        setProfil(result.data);
         // isi form otomatis dari data pertama
        if (result.data[0]) {
          setJudul(result.data[0].judul);
          setText(result.data[0].text);
          setGambar(result.data[0].gambar);  
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }

    useEffect(()=>{
        getProfil()
    },[])

    const submitHandler = (e) => {
    e.preventDefault();

    const id = profil[0]?.id;
    if (!id) return console.log("ID tidak ditemukan");

    const form = new FormData();
    form.append("judul", judul);
    form.append("text", text);

    if (gambar instanceof File) {
      form.append("gambar", gambar);
    }

    axios({
      method: "PUT",
      url: `${API}/profil/${id}`,
      data: form
    })
      .then(() => {
        getProfil();
        window.location.href = "/adminprojek";
      })
      .catch(err => {
        console.log(err);
      });
  };

    
    return {
    API,
    getProfil,
    profil,
    judul,setJudul,
    text,setText,
    gambar,setGambar,
    
    submitHandler

  };
}
export default useProfil
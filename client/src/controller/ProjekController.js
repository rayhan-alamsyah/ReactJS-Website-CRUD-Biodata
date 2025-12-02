import { useState, useEffect } from 'react';
import axios from 'axios';

function useProjek(){
    const [projek,setProjek] = useState([]);
    const API = "http://localhost:3000";
    const [judul,setJudul] = useState("");
    const [text,setText] = useState("");
    const [gambar,setGambar] = useState(null);
    const [nama_link,setNama_Link] = useState("");
    const [masukan_link,setMasukan_Link]=useState("");
    
    
    const getProjek = () => {
      axios ({
        method: 'GET',
        url: `${API}/projek`
      })
      .then(result =>{
        setProjek(result.data);
        
      })
      .catch(err=>{
        console.log(err)
      })
    }

    useEffect(()=>{
        getProjek()
    },[])

    const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("judul", judul);
    form.append("text", text);
    form.append("nama_link", nama_link);
    form.append("masukan_link", masukan_link);

    if (gambar instanceof File) {
      form.append("gambar", gambar);
    }

    axios({
      method: "POST",
      url: `${API}/projek`,
      data: form
    })
      .then(() => {
        // reset form setelah simpan
      setJudul("");
      setText("");
      setNama_Link("");
      setMasukan_Link("");
      setGambar(null);

        getProjek();
        window.location.href = "/adminprojek";

      })
      .catch(err => console.log(err));
  };

  //untuk edit biar data muncul seperti profil
  const getProjekById = (id) => {
  axios.get(`${API}/projek`)
    .then(res => {
      const data = res.data.find(item => item.id == id);
      if (data) {
        setJudul(data.judul);
        setText(data.text);
        setNama_Link(data.nama_link);
        setMasukan_Link(data.masukan_link);
        setGambar(data.gambar);
      }
    })
    .catch(err => console.log(err));
};

  const updateHandler = (e, id) => {
    e.preventDefault();

    const form = new FormData();
    form.append("judul", judul);
    form.append("text", text);
    form.append("nama_link", nama_link);
    form.append("masukan_link", masukan_link);

    if (gambar instanceof File) {
      form.append("gambar", gambar);
    }

    axios({
      method: "PUT",
      url: `${API}/projek/${id}`,
      data: form
    })
      .then(() => {
        window.location.href = "/adminprojek";

      })
      .catch(err => console.log(err));
  };

  const deleteHandler = (id) => {
    axios({
      method: "DELETE",
      url: `${API}/projek/${id}`
    })
      .then(() => getProjek())
      .catch(err => console.log(err));
  };


     return {
    API,
    getProjek,
    projek,
    judul,setJudul,
    text,setText,
    gambar,setGambar,
    nama_link,setNama_Link,
    masukan_link,setMasukan_Link,
    submitHandler,
    updateHandler,
    deleteHandler,
    getProjekById
  };
}

export default useProjek
import React from 'react'
import useProjek from '../controller/ProjekController'
import AdminNavbar from '../components/AdminNavbar'
import '../styles/AdminProjekView.css'



function AdminProjekView() {
    const {projek,API,deleteHandler} = useProjek();

     console.log("=== DATA PROJEK ===");
    projek.forEach(p => console.log("PATH GAMBAR :", p.gambar));

  return (
    <>
    <AdminNavbar/>
    <div className="page-container">
        <div className="card-form-wrapper">
            <div className='row'>
                <div className='col-12'>
                    <h3 className='admin-title'>List Projek</h3>
                    <hr className='admin-title-hr' />
                </div>
                <div className='col-12'>
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Judul</th>
                            <th scope="col">Link</th>
                            <th scope="col">Gambar</th>
                            <th scope="col">
                                <div className="add-wrapper text-center">
                                    <a href='./adminprojekinput' className="tbl-biru add-btn">ADD</a>
                                </div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projek.length !== 0 ? 
                                    projek.map((projek,index) => {
                                        return(
                                            <tr key={projek.id}>
                                                <td>{index + 1}</td>
                                                <td>{projek.judul}</td>
                                                <td>
                                                    <a href={projek.masukan_link} className="tbl-biru">
                                                        {projek.nama_link}
                                                    </a>
                                                </td>
                                                <td> <img 
                                                        src={`${API}${projek.gambar}`}
                                                        width="100"
                                                        style={{borderRadius: "5px"}}
                                                    /></td>
                                                <td><a href={`./adminprojekedit/${projek.id}`} className="tbl-biru">
                                                        EDIT
                                                    </a>      
                                                    <a 
                                                        href="#" 
                                                        className="tbl-biru" 
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (window.confirm("Yakin ingin menghapus data ini?")) {
                                                                deleteHandler(projek.id);
                                                            }
                                                        }}
                                                    >
                                                        DELETE
                                                    </a></td>
                                            </tr>
                                        )
                                    }):
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                                            Tidak ada data projek.
                                        </td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminProjekView

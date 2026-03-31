
import { useNavigate } from "react-router-dom";
import '../styles/Navbar.css'

function AdminNavbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
    navigate("/"); // balik ke halaman utama
  };
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Rayhan Alamsyah</a></div>
            <div className="menu">
                <ul>
                    <li><a href="/adminprojek">Projek</a></li>
                    <li><a href="/adminprofil">Profil</a></li>
                    <li><a href="#judul-projek">Projek</a></li>
                    <li><a href="" onClick={handleLogout} className="tbl-biru">Log Out</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default AdminNavbar

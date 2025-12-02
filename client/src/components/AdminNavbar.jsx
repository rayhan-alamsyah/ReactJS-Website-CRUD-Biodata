
import '../styles/Navbar.css'

function AdminNavbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Rayhan Alamsyah</a></div>
            <div className="menu">
                <ul>
                    <li><a href="/adminprojek">Projek</a></li>
                    <li><a href="/adminprofil">Profil</a></li>
                    <li><a href="#judul-projek">Projek</a></li>
                    <li><a href="" className="tbl-biru">Log Out</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default AdminNavbar

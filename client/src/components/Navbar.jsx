
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Rayhan Alamsyah</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li><a href="#judul-projek">Projek</a></li>
                    <li><a href="/adminprojek" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

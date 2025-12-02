import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdminProfile from "../pages/AdminProfil";
import AdminProjekView from "../pages/AdminProjekView";
import AdminProjekInput from "../pages/AdminProjekInput";
import AdminProjekEdit from "../pages/AdminProjekEdit";


function IndexPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminprofil" element={<AdminProfile />} />
      <Route path="/adminprojek" element={<AdminProjekView />} />
      <Route path="/adminprojekinput" element={<AdminProjekInput />} />
      <Route path="/adminprojekedit/:id" element={<AdminProjekEdit />} />
    </Routes>
  );
}

export default IndexPages;
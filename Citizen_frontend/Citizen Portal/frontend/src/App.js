import ComplaintEdit from "./components/Edit/ComplaintEdit";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import AdminManageDept from "./components/AdminManageDept";
import AdminManageCitizen from "./components/AdminManageCitizen"
import AdminManageComplaints from "./components/AdminManageComplaints"
import DepartmentUpdateComplaint from "./components/DepartmentUpdateComplaint";
import CitizenTrackComplaint from "./components/CitizenTrackComplaint";
import CitizenNewComplaint from "./components/CitizenNewComplaint";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit/Edit';



function App() {
  return (
    <Routes>
      
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/adminmanagedept' element={<AdminManageDept />} />
      <Route path='/adminmanagecitizen' element={<AdminManageCitizen />} />
      <Route path='/adminmanagecomplaints' element={<AdminManageComplaints />} />
  <Route path='/citizennewcomplaint' element={<CitizenNewComplaint />} />
  <Route path='/citizentrackcomplaint' element={<CitizenTrackComplaint />} />
  <Route path='/departmentupdatecomplaint' element={<DepartmentUpdateComplaint />} />
  <Route path='/registration' element={<Registration />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/edit/complaint/:id' element={<ComplaintEdit />} />
  </Routes>
  );
}

export default App;

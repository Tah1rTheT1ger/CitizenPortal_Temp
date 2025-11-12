import ComplaintEdit from "./components/Edit/ComplaintEdit";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Update_Complaint from "./components/Update_Complaint";
import Read_Department from "./components/Read_Department";
import See_Complaints from "./components/See_Complaints";
import Create_Department from "./components/Create_Department";
import Create_Complaint from "./components/Create_Complaint";
import Create_Citizens from "./components/Create_Citizens";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit/Edit';



function App() {
  return (
    <Routes>
      
      <Route path='/edit' element={<Edit/>}/>
      <Route path='/create_citizens' element={<Create_Citizens />} />
  <Route path='/create_complaint' element={<Create_Complaint />} />
  <Route path='/create_department' element={<Create_Department />} />
  <Route path='/see_complaints' element={<See_Complaints />} />
  <Route path='/read_department' element={<Read_Department />} />
  <Route path='/update_complaint' element={<Update_Complaint />} />
  <Route path='/registration' element={<Registration />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/edit/complaint/:id' element={<ComplaintEdit />} />
  </Routes>
  );
}

export default App;

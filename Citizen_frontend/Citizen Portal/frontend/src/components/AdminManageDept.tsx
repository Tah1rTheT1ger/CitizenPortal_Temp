import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminManageDept.css";

import CreateDepartment from './Resource/CreateDepartment';
import ReadDepartment from './Resource/ReadDepartment';
import UpdateDepartment from './Resource/UpdateDepartment';

export default function AdminManageDept() { 
  const navigate = useNavigate();

  return (
    <>
      <div id="id-dept-c" className="d-flex flex-column border border-2 h-50"><CreateDepartment/></div>
      <div id="id-dept-r" className="d-flex flex-column border border-2 h-50"><ReadDepartment/></div>
      <div id="id-dept-u" className="d-flex flex-column border border-2 h-50"><UpdateDepartment/></div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminManageCitizen.css";

import CreateCitizen from './Resource/CreateCitizen';
import ReadCitizen from './Resource/ReadCitizen';
import UpdateCitizen from './Resource/UpdateCitizen';

export default function AdminManageCitizen() { 
  const navigate = useNavigate();

  return (
    <>
      <div id="id-5L" className="d-flex flex-column border border-2 h-50"><CreateCitizen/></div>
      <div id="id-61" className="d-flex flex-column border border-2 h-50"><ReadCitizen/></div>
      <div id="id-63" className="d-flex flex-column border border-2 h-50"><UpdateCitizen/></div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminManageComplaints.css";

import CreateComplaint from './Resource/CreateComplaint';
import ReadComplaint from './Resource/ReadComplaint';
import UpdateComplaint from './Resource/UpdateComplaint';

export default function AdminManageComplaints() { 
  const navigate = useNavigate();

  return (
    <>
      <div id="id-complaint-c" className="d-flex flex-column border border-2 h-50"><CreateComplaint/></div>
      <div id="id-complaint-r" className="d-flex flex-column border border-2 h-50"><ReadComplaint/></div>
      <div id="id-complaint-u" className="d-flex flex-column border border-2 h-50"><UpdateComplaint/></div>
    </>
  );
}

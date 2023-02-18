import React from "react";
import { BiUserCircle } from "react-icons/bi";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="d-flex align-items-center">
        <div className="me-4">
          <BiUserCircle size={24} style={{marginLeft:'8px'}} />
          حسین عزیزدخت
        </div>
        <div className="me-4 ml-4">|</div>
        <div className="me-4">حوزه ستادی</div>
      </div>
    </div>
  );
};

export default TopBar;

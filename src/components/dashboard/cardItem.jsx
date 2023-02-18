import React from "react";
import { FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <Link to="/">
      <div className={`cardItem ${props.bg}`}>
        <div>
          <FiMonitor />
        </div>
        {props.children}
      </div>
    </Link>
  );
};

export default CardItem;

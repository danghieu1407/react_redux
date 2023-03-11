import React, { useState } from "react";
import "./header.css";
const Header = (props) => {
	const {setEdit} = props;
	const handleEdit = () => {
		setEdit(true);
	}
  return (
    <div
      style={{
        backgroundColor: "#314755",
        backgroundImage: "linear-gradient(to right, #314755, #26a0da)",
      }}
    >
      <div className="info_container">
        <div className="info-edit" onClick={handleEdit}>Edit</div>
        <img
          className="info-ava"
          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/276171192_1669298540082640_4746287806610913901_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Zjq21L3AacUAX_jQI3u&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBhpYLrRnKePqpsTkSw779LnIEh-P00hMDA4z1WSv9TpQ&oe=6411B5E7"
          alt=""
        />
        <div className="about">
          <div className="info-username">Nguyen Dang Hieu</div>
          <div className="info-age"> 20 Year Old</div>
          <div className="info-about">I'm a software engineer</div>
        </div>
      </div>
    </div>
  );
};


export default Header;

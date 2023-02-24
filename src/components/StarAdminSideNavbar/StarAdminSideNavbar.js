import React from "react";
import "./StarAdminSideNavbar.scss";
import { GoPrimitiveDot } from "react-icons/go";
import { BiRadioCircle } from "react-icons/bi";
import { Accordion } from "../Accordion/Accordion";
import { MdMonitor, MdGpsFixed, MdLockOutline } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  AiOutlineTable,
  AiOutlineLineChart,
  AiOutlineFile,
} from "react-icons/ai";
import { RiAccountBoxLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";

export const StarAdminSideNavbar = ({ isSideNav }) => {
  return (
    <>
      {isSideNav ? (
        <div className="star-admin-side-navbar-content-container">
          <div className="star-admin-menu-image-container">
            <img
              src="https://www.bootstrapdash.com/demo/star-admin-free/react/template/demo_1/preview/static/media/logo.807f07af.svg"
              alt="/"
              className="star-admin-image"
            />
          </div>
          <div className="star-admin-menu-profile-image-and-content-container">
            <div className="star-admin-menu-profile-container">
              <img
                src="https://www.bootstrapdash.com/demo/star-admin-free/react/template/demo_1/preview/static/media/face8.16958c47.jpg"
                alt="/"
                className="star-admin-menu-image1"
              />
              <GoPrimitiveDot className="star-admin-menu-online-icon" />
              <div className="star-admin-menu-profile-content-container">
                <p className="star-admin-menu-profile-title">Allen Moreno</p>
                <p className="star-admin-menu-profile-user-content">
                  Premium user
                </p>
              </div>
            </div>
          </div>
          <p className="star-admin-menu-dashboard-content">
            <BiRadioCircle className="star-admin-menu-circle-icon" /> Dashboard
          </p>
          <Accordion />
          <p className="star-admin-menu-content">
            <BiRadioCircle className="star-admin-menu-circle-icon" />{" "}
            Documentation
          </p>
        </div>
      ) : (
        <div className="closed-side-navbar-container">
          <div className="star-admin-side-navbar-image-container">
            <img
              src="https://www.bootstrapdash.com/demo/star-admin-free/react/template/demo_1/preview/static/media/logo-mini.8539ea86.svg"
              alt="/"
              className="star-admin-side-navbar-image"
            />
          </div>
          <div className="side-navbar-icon-container">
            <MdMonitor />
          </div>
          <div className="side-navbar-icon-container">
            <MdGpsFixed />
          </div>
          <div className="side-navbar-icon-container">
            <TfiMenuAlt />
          </div>
          <div className="side-navbar-icon-container">
            <AiOutlineTable />
          </div>
          <div className="side-navbar-icon-container">
            <RiAccountBoxLine />
          </div>
          <div className="side-navbar-icon-container">
            <AiOutlineLineChart />
          </div>
          <div className="side-navbar-icon-container">
            <MdLockOutline />
          </div>
          <div className="side-navbar-icon-container">
            <IoMdInformationCircleOutline />
          </div>
          <div className="side-navbar-icon-container">
            <AiOutlineFile />
          </div>
        </div>
      )}
    </>
  );
};
